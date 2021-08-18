import { Request, Response } from 'express';

import { IQuestionRes } from './../../middle/type/question/question';

import { err } from '../constants/error';
import Question from '../models/Question';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { dateStringFormat } from '../utils/date';

/**
 * API
 * /api/question
 */
//상품 문의 조회
export const getQuestion = async (req: Request, res: Response) => {
  const { productId } = req.params;
  console.log(productId);
  const questionSnapshot = await Question.findAll({
    attributes: ['id', 'title', 'contents', 'isSecret', 'reply', 'createdAt'],
    where: {
      productId,
    },
    order: [['createdAt', 'DESC']],
  });

  const questions: IQuestionRes[] = questionSnapshot.map((item) => {
    const id = item.getDataValue('id');
    const date = item.getDataValue('createdAt');
    if (!id || !date) throw new HttpError(err.CREATE_ERROR);

    return {
      id,
      title: item.getDataValue('title'),
      contents: item.getDataValue('contents'),
      date: dateStringFormat(date, '.'),
      isSecret: item.getDataValue('isSecret'),
      answer: item.getDataValue('reply') ?? null,
    };
  });

  res.status(200).json(questions);
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
    title: title as string,
    contents: contents as string,
    isSecret: !!isSecret,
  });
  const questionId = result.getDataValue('id');

  if (!questionId) {
    throw new HttpError(err.CREATE_ERROR);
  }

  res.status(200).json({ success: true });
};
