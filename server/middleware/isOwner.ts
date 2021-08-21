import type { NextFunction, Request, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { err } from '../constants/error';
import User from '../models/User';
import HttpError from '../utils/HttpError';

export interface IOwnerRequest extends Request {
  body: {
    ownerId: number;
  };
}

const isOwner: RequestHandler = (req: IOwnerRequest, _, next: NextFunction) => {
  const { authorization } = req.headers;
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!authorization || !jwt_secret) {
    req.body.ownerId = -1;
  } else {
    const user = jwt.verify(authorization, jwt_secret) as User;
    if (!user) {
      req.body.ownerId = -1;
    } else {
      req.body.ownerId = user.id;
    }
  }
  next();
};

export default isOwner;
