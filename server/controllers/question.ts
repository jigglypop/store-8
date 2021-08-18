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
  const questionSnapshot = await Question.findAll({
    attributes: ['id', 'title', 'contents', 'isSecret', 'reply', 'createdAt', 'replyDate'],
    where: {
      productId,
    },
    order: [['createdAt', 'DESC']],
  });

  const questions: IQuestionRes[] = questionSnapshot.map((item) => {
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

  //TODO - title,contents validation
  if (!productId || !title || !contents) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  try {
    await Question.create({
      userId,
      productId: +productId,
      title: title as string,
      contents: contents as string,
      isSecret: !!isSecret,
    });
  } catch (error) {
    throw new HttpError(err.CREATE_ERROR);
  }

  res.status(200).json({ success: true });
};

//상품 문의 수정
export const updateQuestion = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
  const { questionId, title, contents, isSecret } = req.body;

  const isUserOwnedQuestion = await isUserQuestion(userId, +productId, +questionId);

  //TODO - title,contents validation
  if (!isUserOwnedQuestion) {
    throw new HttpError(err.WRONG_ACCESS_QUESTION);
  }
  try {
    await Question.update(
      {
        title,
        contents,
        isSecret: !!isSecret,
        userId,
        productId: +productId,
      },
      {
        where: {
          id: +questionId,
          userId,
          productId,
        },
      }
    );
  } catch (error) {
    throw new HttpError(err.UPDATE_ERROR);
  }

  res.status(200).json({ success: true });
};

//상품 문의 삭제
export const deleteQuestion = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
  const { questionId } = req.body;

  const isUserOwnedQuestion = await isUserQuestion(userId, +productId, +questionId);

  //TODO - title,contents validation
  if (!isUserOwnedQuestion) {
    throw new HttpError(err.WRONG_ACCESS_QUESTION);
  }
  try {
    await Question.destroy({
      where: {
        id: +questionId,
        userId,
        productId,
      },
    });
  } catch (error) {
    throw new HttpError(err.DELETE_ERROR);
  }

  res.status(200).json({ success: true });
};

//유저가 접근한 문의가 유저의 문의가 맞는지 체크
const isUserQuestion = async (userId: number, productId: number, questionId: number) => {
  const questionSnapshot = await Question.findOne({
    attributes: ['id'],
    where: {
      id: questionId,
      userId,
      productId,
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

  try {
    await Question.update(
      {
        reply: contents,
        replyDate: new Date(),
      },
      {
        where: { id: +questionId },
      }
    );
  } catch (error) {
    throw new HttpError(err.UPDATE_ERROR);
  }

  res.status(200).json({ success: true });
};
