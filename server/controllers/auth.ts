import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import User from '../models/User';
import HttpError from '../utils/HttpError';
import { generateToken } from '../utils/generateToken';
import { serialize } from '../utils/serialize';
import { IAuthRequest } from '@middle/type/request';
import { err } from '../constants/error';

interface IUpdateUserImgRequest extends IAuthRequest {
  body: IAuthRequest['body'] & {
    imageUrl: string;
  };
}

export const check = async (req: IAuthRequest, res: Response) => {
  const { userId } = req.body;
  const user = await User.findByPk(userId);
  if (!user) {
    throw new HttpError({ ...err.TEST_ERROR });
  }
  const serialized = await serialize(user);
  res.status(200).json({ status: 200, data: serialized });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new HttpError({ ...err.INVALID_INPUT_ERROR });
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new HttpError({ ...err.NO_DATA });
  }

  const hashedPassword = user.getDataValue('hashedPassword');
  const valid = await bcrypt.compare(password, hashedPassword);
  if (!valid) {
    throw new HttpError({ ...err.WRONG_PASSWORD_ERROR });
  }

  const serialized = await serialize(user);
  const token = await generateToken(user);
  res.set('token', token);
  res.status(200).json({ status: 200, data: serialized });
};

export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    throw new HttpError({ ...err.INVALID_INPUT_ERROR });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, hashedPassword, mileage: 0 });
  const serialized = await serialize(user);
  const token = await generateToken(user);
  res.set('token', token);
  res.status(200).json({ status: 200, data: serialized });
};

export const updateImg = async (req: IUpdateUserImgRequest, res: Response) => {
  const { userId, imageUrl } = req.body;
  const user = await User.update({ imageUrl }, { where: { id: userId } });
  res.status(200).json({ status: 200, data: user });
};
