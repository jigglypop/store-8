import { NextFunction, Request, Response } from "express";
import HttpError from "../util/HttpError";
import { BaseError, UniqueConstraintError } from "sequelize";

const handleDBError = (error: BaseError, res: Response) => {
  let status = 500;
  let message = "DB Error: " + error.message;

  if (error instanceof UniqueConstraintError) {
    status = 400;
    message =
      "DB Unique Error: " +
      Object.keys(error.fields)
        .map((field) => field.split(".")[1])
        .join(", ") +
      "이(가) 중복됩니다.";
  }
  res.status(status).json({ status, message });
};

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  let status = 500;
  let message = "Server Error: " + error.message;

  if (error instanceof BaseError) {
    handleDBError(error, res);
    return;
  }
  if (error instanceof HttpError) {
    status = error.status;
    message = error.message;
  }

  res.status(status).json({ status, message });
};

export default errorMiddleware;
