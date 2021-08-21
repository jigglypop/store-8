import { Request, Response } from 'express';

import { err } from '../constants/error';

import HttpError from '../utils/HttpError';

interface MulterRequest extends Request {
  file?: any;
}

export const uploadToS3 = async (req: MulterRequest, res: Response) => {
  if (!(req.files instanceof Array)) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }
  const location = req.files?.map((file) => {
    return (file as Express.MulterS3.File).location;
  });
  res.status(200).json({ src: location });
};
