import { Request, Response } from 'express';

import { err } from '../constants/error';

import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';

interface MulterRequest extends Request {
  file: any;
}

export const uploadToS3 = async (req: MulterRequest, res: Response) => {
  const location = req.file.location;
  console.log(location);
  res.status(200).json({ src: location });
};
