import type { NextFunction, Request, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { err } from '../constants/error';
import HttpError from '../utils/HttpError';
import { IAuthRequest, JWTPayload } from '@middle/type/request';

const jwtMiddleware: RequestHandler = (req: IAuthRequest, _, next: NextFunction) => {
  const { authorization } = req.headers;
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!authorization || !jwt_secret) {
    throw new HttpError({ ...err.NO_ALLOWED });
  }
  const user = jwt.verify(authorization, jwt_secret) as JWTPayload;
  req.body.userId = user.id;
  req.user = user;
  next();
};

export default jwtMiddleware;
