import { Request, Response } from 'express';

import { IQuestion } from './../../middle/type/question/question';
import { DEFAULT_QUESTION_LIMIT, DEFAULT_QUESTION_PAGE } from './../../middle/constants/default';

import { err } from '../constants/error';
import Question from '../models/Question';
import HttpError from '../utils/HttpError';
import { dateStringFormat } from '../utils/date';

/**
 * API
 * /api/question
 */
//상품 문의 조회
export const getQuestion = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { page, limit } = req.query;

  let _page: number = DEFAULT_QUESTION_PAGE;
  let _limit: number = DEFAULT_QUESTION_LIMIT;

  if (page) {
    _page = +page - 1;
  }
  if (limit) {
    _limit = +limit;
  }

  const questionSnapshot = await Question.findAndCountAll({
    attributes: [
      'id',
      'title',
      'contents',
      'isSecret',
      'reply',
      'createdAt',
      'replyDate',
      'userId',
    ],
    where: {
      productId,
    },
    order: [['createdAt', 'DESC']],
    offset: _page * _limit,
    limit: _limit,
  });

  const questions: IQuestion[] = questionSnapshot.rows.map((item) => {
    const id = item.getDataValue('id');
    const date = item.getDataValue('createdAt');
    const answerDate = item.getDataValue('replyDate');

    if (!id || !date) throw new HttpError(err.CREATE_ERROR);

    return {
      id,
      title: item.getDataValue('title'),
      contents: item.getDataValue('contents'),
      date: dateStringFormat(date, '.'),
      isSecret: item.getDataValue('isSecret'),
      answer: item.getDataValue('reply') ?? null,
      answerDate: answerDate ? dateStringFormat(answerDate, '.') : null,
      userId: item.getDataValue('userId'),
    };
  });

  res.status(200).json({ totalCount: questionSnapshot.count, questions });
};

//상품 문의 생성
export const createQuestion = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { title, contents, isSecret, userId } = req.body;

  //TODO - title,contents validation
  if (!productId || !title || !contents) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  await Question.create({
    userId,
    productId: +productId,
    title: title as string,
    contents: contents as string,
    isSecret: !!isSecret,
  });

  res.status(200).json({ success: true });
};

//상품 문의 수정
export const updateQuestion = async (req: Request, res: Response) => {
  const { questionId, title, contents, isSecret, userId } = req.body;

  const isUserOwnedQuestion = await isUserQuestion(userId, +questionId);

  //TODO - title,contents validation
  if (!isUserOwnedQuestion) {
    throw new HttpError(err.WRONG_ACCESS_QUESTION);
  }

  await Question.update(
    {
      title,
      contents,
      isSecret: !!isSecret,
      userId,
    },
    {
      where: {
        id: +questionId,
        userId,
      },
    }
  );

  res.status(200).json({ success: true });
};

//상품 문의 삭제
export const deleteQuestion = async (req: Request, res: Response) => {
  const { questionId, userId } = req.body;

  const isUserOwnedQuestion = await isUserQuestion(userId, +questionId);

  //TODO - title,contents validation
  if (!isUserOwnedQuestion) {
    throw new HttpError(err.WRONG_ACCESS_QUESTION);
  }

  await Question.destroy({
    where: {
      id: +questionId,
      userId,
    },
  });

  res.status(200).json({ success: true });
};

//유저가 접근한 문의가 유저의 문의가 맞는지 체크
const isUserQuestion = async (userId: number, questionId: number) => {
  const questionSnapshot = await Question.findOne({
    attributes: ['id'],
    where: {
      id: questionId,
      userId,
    },
  });
  return !!questionSnapshot;
};

//관리자 전용 - 문의 답변 달기
export const updateQuestionReply = async (req: Request, res: Response) => {
  const { questionId } = req.params;
  const { contents } = req.body;

  //TODO - contents validation
  if (!contents) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  await Question.update(
    {
      reply: contents,
      replyDate: new Date(),
    },
    {
      where: { id: +questionId },
    }
  );

  res.status(200).json({ success: true });
};
