import type { NextFunction, Request, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export interface ILoginRequest extends Request {
  body: {
    isLoggedIn: boolean;
  };
}

const isLoggedIn: RequestHandler = (req: ILoginRequest, _, next: NextFunction) => {
  const { authorization } = req.headers;
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!authorization || !jwt_secret) {
    req.body.isLoggedIn = false;
  } else {
    const user = jwt.verify(authorization, jwt_secret) as User;
    if (!user) {
      req.body.isLoggedIn = false;
    } else {
      req.body.isLoggedIn = true;
    }
  }
  next();
};

export default isLoggedIn;
