import { NextFunction, Request, Response } from "express";

const wrapAsync =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };

export default wrapAsync;
