import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/User";
import HttpError from "../util/HttpError";
import { generateToken } from "../util/generateToken";
import { serialize } from "../util/serialize";
import { IAuthRequest } from "../middleware/jwtMiddleware";

interface IUpdateUserImgRequest extends IAuthRequest {
  body: IAuthRequest["body"] & {
    imageUrl: string;
  };
}

export const check = async (req: IAuthRequest, res: Response) => {
  const { userId } = req.body;
  const user = await User.findByPk(userId);
  if (!user) {
    throw new HttpError(401, "같은 이름의 계정이 존재하지 않습니다.");
  }
  const serialized = await serialize(user);
  res.status(200).json({ data: serialized });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new HttpError(400, "이름과 비밀번호를 모두 입력해 주세요");
  }
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new HttpError(401, "같은 이름의 계정이 존재하지 않습니다.");
  }

  const hashedPassword = user.getDataValue("hashedPassword");
  const valid = await bcrypt.compare(password, hashedPassword);
  if (!valid) {
    throw new HttpError(401, "비밀번호가 잘못되었습니다");
  }

  const serialized = await serialize(user);
  const token = await generateToken(user);
  res.set("token", token);
  res.status(200).json({ data: serialized });
};

export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    throw new HttpError(400, "입력되지 않은 값이 있습니다.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, hashedPassword });
  const serialized = await serialize(user);
  const token = await generateToken(user);
  res.set("token", token);
  res.status(200).json({ data: serialized });
};

export const updateImg = async (req: IUpdateUserImgRequest, res: Response) => {
  const { userId, imageUrl } = req.body;
  const user = await User.update({ imageUrl }, { where: { id: userId } });
  res.status(200).json({ data: user });
};
