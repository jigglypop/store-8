import { Request, Response } from 'express';

import { err } from '../constants/error';
import Question from '../models/Question';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';

/**
 * API
 * /api/question
 */
//상품 문의 조회
export const getQuestion = async (req: Request, res: Response) => {
  const { productId } = req.params;
};

//상품 문의 생성
export const createQuestion = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
  const { title, contents, isSecret } = req.body;
  if (!productId || !title || !contents) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  const result = await Question.create({
    userId,
    productId: +productId,
    title,
    contents,
    isSecret: !!isSecret,
  });
  const questionId = result.getDataValue('id');

  if (!questionId) {
    throw new HttpError(err.CREATE_ERROR);
  }

  res.status(200).json({ success: true });
};
