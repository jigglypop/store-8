import { Request, Response } from 'express';

import { IMyReview } from './../../middle/type/review/review';
import { IMyQuestion } from './../../middle/type/question/question';
import { DEFAULT_MYREVIEW_LIMIT, DEFAULT_REVIEW_PAGE } from './../../middle/constants/default';
import { DEFAULT_MYQUESTION_LIMIT, DEFAULT_QUESTION_PAGE } from './../../middle/constants/default';

import Review from '../models/Review';
import Question from '../models/Question';

import { err } from '../constants/error';
import HttpError from '../utils/HttpError';
import { dateStringFormat } from '../utils/date';

import { getProductTitleInfo } from './product';
import { getReviewImgs, getReviewLikeCount, isUserLikeReview } from './review';

//나의 후기 조회
export const getMyReview = async (req: Request, res: Response) => {
  const { page, limit } = req.query;
  const { userId } = req.body;

  let _page: number = DEFAULT_REVIEW_PAGE;
  let _limit: number = DEFAULT_MYREVIEW_LIMIT;
  if (page) _page = +page - 1;
  if (limit) _limit = +limit;

  const reviewSnapshot = await Review.findAndCountAll({
    attributes: ['id', 'title', 'contents', 'score', 'createdAt', 'productId', 'userId'],
    where: { userId },
    order: [['createdAt', 'DESC']],
    offset: _page * _limit,
    limit: _limit,
  });

  const reviews: IMyReview[] = await Promise.all(
    reviewSnapshot.rows.map(async (item) => {
      const id = item.getDataValue('id');
      const productId = item.getDataValue('productId');
      const date = item.getDataValue('createdAt');

      if (!id || !date) throw new HttpError(err.CREATE_ERROR);

      const imgSrc = await getReviewImgs(id);
      const productInfo = await getProductTitleInfo(productId);
      const { likeCount, dislikeCount } = await getReviewLikeCount(id);
      const { isLike, isDislike } = await isUserLikeReview(id, userId);

      return {
        id,
        title: item.getDataValue('title'),
        contents: item.getDataValue('contents'),
        score: item.getDataValue('score'),
        date: dateStringFormat(date, '.'),
        imgSrc,
        productInfo,
        likeCount,
        dislikeCount,
        isLike,
        isDislike,
        userId: item.getDataValue('userId'),
      };
    })
  ).catch((e) => {
    throw new Error(e.message);
  });

  const responseData = { totalCount: reviewSnapshot.count, reviews };
  res.status(200).json(responseData);
};

//내 문의 조회

export const getMyQuestion = async (req: Request, res: Response) => {
  const { page, limit } = req.query;
  const { userId } = req.body;

  let _page: number = DEFAULT_QUESTION_PAGE;
  let _limit: number = DEFAULT_MYQUESTION_LIMIT;

  if (page) _page = +page - 1;
  if (limit) _limit = +limit;

  const questionSnapshot = await Question.findAndCountAll({
    attributes: [
      'id',
      'title',
      'contents',
      'isSecret',
      'reply',
      'createdAt',
      'productId',
      'replyDate',
      'userId',
    ],
    where: {
      userId,
    },
    order: [['createdAt', 'DESC']],
    offset: _page * _limit,
    limit: _limit,
  });

  const questions: IMyQuestion[] = await Promise.all(
    questionSnapshot.rows.map(async (item) => {
      const id = item.getDataValue('id');
      const date = item.getDataValue('createdAt');
      const answerDate = item.getDataValue('replyDate');
      const productId = item.getDataValue('productId');

      if (!id || !date) throw new HttpError(err.CREATE_ERROR);

      const productInfo = await getProductTitleInfo(productId);

      return {
        id,
        title: item.getDataValue('title'),
        contents: item.getDataValue('contents'),
        date: dateStringFormat(date, '.'),
        isSecret: item.getDataValue('isSecret'),
        answer: item.getDataValue('reply') ?? null,
        answerDate: answerDate ? dateStringFormat(answerDate, '.') : null,
        userId: item.getDataValue('userId'),
        productInfo,
      };
    })
  ).catch((e) => {
    throw new Error(e.message);
  });

  res.status(200).json({ totalCount: questionSnapshot.count, questions });
};
