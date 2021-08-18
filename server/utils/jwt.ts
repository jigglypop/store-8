import { err } from '@server/constants/error';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import HttpError from './HttpError';

const JWT_SECRET = process.env.JWT_SECRET ?? '';

//jwt decode
export const decodeToken = (token: string): JwtPayload => {
  const secret = JWT_SECRET;
  const decoded = jwt.verify(token, secret);

  if (typeof decoded === 'string') {
    throw new HttpError(err.JWT_TOKEN_INVALID_ERROR);
  }

  return decoded;
};

//header에서 jwt토큰 가져오기
export const getAccessToken = (authorization: string | void): string => {
  if (!authorization) return '';
  return authorization.split('Bearer ')[1];
};
