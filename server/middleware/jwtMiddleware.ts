import type { NextFunction, Request, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { err } from "../constants/error";
import User from "../models/User";
import HttpError from "../utils/HttpError";

export interface IAuthRequest extends Request {
  body: {
    userId: number;
  };
}

const jwtMiddleware: RequestHandler = (
  req: IAuthRequest,
  _,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!authorization || !jwt_secret) {
    throw new HttpError({ ...err.NO_ALLOWED });
  }
  const user = jwt.verify(authorization, jwt_secret) as User;
  req.body.userId = user.id;
  next();
};

export default jwtMiddleware;
