import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import User from '../models/User';
import HttpError from '../utils/HttpError';
import { generateToken } from '../utils/generateToken';
import { serialize } from '../utils/serialize';
import { err } from '../constants/error';
import UserCoupon from '../models/UserCoupon';
import { IAuthRequest } from '@middle/type/request';

interface IUpdateUserImgRequest extends IAuthRequest {
  body: IAuthRequest['body'] & {
    imageUrl: string;
  };
}

interface IUpdateUserProfileRequest extends IAuthRequest {
  body: IAuthRequest['body'] & {
    imageUrl?: string;
    id: number;
    username: string;
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

  // 로그인시 쿠폰 지급
  UserCoupon.bulkCreate([
    {
      userId: user.id,
      couponId: 1,
      isUsed: false,
      dDay: new Date('2021-08-31'),
    },
    {
      userId: user.id,
      couponId: 2,
      isUsed: false,
      dDay: new Date('2021-09-10'),
    },
    {
      userId: user.id,
      couponId: 3,
      isUsed: false,
      dDay: new Date('2021-08-30'),
    },
    {
      userId: user.id,
      couponId: 4,
      isUsed: false,
      dDay: new Date('2021-09-11'),
    },
    {
      userId: user.id,
      couponId: 5,
      isUsed: false,
      dDay: new Date('2021-09-11'),
    },
  ]);

  res.status(200).json({ status: 200, data: serialized });
};

export const updateImg = async (req: IUpdateUserImgRequest, res: Response) => {
  const { userId, imageUrl } = req.body;
  const user = await User.update({ imageUrl }, { where: { id: userId } });
  res.status(200).json({ status: 200, data: user });
};

export const getUsername = async (userId: number): Promise<string> => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new HttpError({ ...err.TEST_ERROR });
  }
  const userSerialized = await serialize(user);
  return userSerialized.username;
};

export const updateProfile = async (req: IUpdateUserProfileRequest, res: Response) => {
  const { userId, username, id } = req.body;
  let imageUrl = req.body?.imageUrl;

  if (imageUrl.length === 1) {
    imageUrl = imageUrl[0];
  } else {
    imageUrl = '';
  }

  console.log(userId, username, id, imageUrl);

  if (userId !== id) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  const [affectedRow] = await User.update({ imageUrl, username }, { where: { id: userId } });

  if (!affectedRow) {
    throw new HttpError(err.UPDATE_ERROR);
  }

  const user = await User.findByPk(id);

  if (!user) {
    throw new HttpError({ ...err.TEST_ERROR });
  }

  const serialized = await serialize(user);

  res.status(200).json({ status: 200, data: serialized });
};
