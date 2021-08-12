import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import fetch from "node-fetch";
import HttpError from "../utils/HttpError";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";
import { serialize } from "../utils/serialize";
import { err } from "../constants/error";

const getAccessToken = async (req: Request) => {
  const clientID = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientID && !clientSecret) throw new HttpError({ ...err.JWT_TOKEN_INVALID_ERROR });
  const requestToken = req.query.code;
  const token_result = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );
  if (!token_result) throw new HttpError({ ...err.JWT_TOKEN_INVALID_ERROR });
  const token_data = await token_result.json();
  const token = await token_data.access_token;
  return token;
};

const getGithubUser = async (token: string) => {
  const result = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token,
    },
  });
  if (!result) throw new HttpError({ ...err.LOGIN_ERROR });
  const data = await result.json();
  return data;
};

export const github = async (req: any, res: Response) => {
  const token = await getAccessToken(req);
  const data = await getGithubUser(token);
  req.session.data = {
    data,
  };
  res.redirect("/github");
};

export const githubtoken = async (req: any, res: Response) => {
  const data = req.session.data.data;
  if (!data) {
    throw new HttpError({ ...err.NO_SESSION });
  }
  let user = await User.findOne({ where: { username: data.login } });
  const username = data.login;
  const password = data.id.toString();
  const imageUrl = data.avatar_url;
  if (!user) {
    const hashedPassword = await bcrypt.hash(password.toString(), 10);
    user = await User.create({ username, hashedPassword, imageUrl });
  } else {
    const hashedPassword = user.getDataValue("hashedPassword");
    const valid = await bcrypt.compare(password, hashedPassword);
    if (!valid) throw new HttpError({ ...err.WRONG_PASSWORD_ERROR });
  }
  // 로그인 발급
  const serialized = await serialize(user);
  const token = await generateToken(user);
  res.set("token", token);
  res.status(200).json({ status: 200,  data: serialized });
  req.session.destroy();
};
