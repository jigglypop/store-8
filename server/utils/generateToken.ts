import jwt from 'jsonwebtoken';
import HttpError from './HttpError';
import User from '../models/User';
import { err } from '../constants/error';
import { JWTPayload } from '@middle/type/request';

// 토큰 발급
export const generateToken = (user: User): string => {
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!jwt_secret) {
    throw new HttpError({ ...err.JWT_FAIL });
  }

  const payload: JWTPayload = {
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, jwt_secret, {
    expiresIn: process.env.JWT_EXPIRED,
  });
};
