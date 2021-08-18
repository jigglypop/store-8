import { Request, Response } from 'express';

import { IReviewRes } from './../../middle/type/review/review';

import { err } from '../constants/error';
import Review from '../models/Review';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { dateStringFormat } from '../utils/date';

// interface IReviewRes {
//   id: number;
//   title: string;
//   contents: string;
//   score: number;
//   imgSrc: string[];
// }

//리뷰 조회
export const getReview = async (req: Request, res: Response) => {
  const { productId } = req.params;
};

//리뷰 생성
export const createReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;

  const { title, contents, score } = req.body;

  //TODO - title,contents validation
  if (!productId || !title || !contents || score === undefined) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  try {
    await Review.create({
      userId,
      productId: +productId,
      title: title as string,
      contents: contents as string,
      score: +score,
    });
  } catch (error) {
    throw new HttpError(err.CREATE_ERROR);
  }

  res.status(200).json({ success: true });
};

//리뷰 수정
export const updateReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
  const { reviewId, title, contents, score } = req.body;

  const isUserOwnedReview = await isUserReview(userId, +productId, +reviewId);

  //TODO - title,contents validation
  if (!isUserOwnedReview) {
    throw new HttpError(err.WRONG_ACCESS_REVIEW);
  }

  try {
    await Review.update(
      {
        title,
        contents,
        score: +score,
        userId,
        productId: +productId,
      },
      {
        where: {
          id: +reviewId,
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

//리뷰 삭제
export const deleteReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
  const { reviewId } = req.body;

  const isUserOwnedReview = await isUserReview(userId, +productId, +reviewId);

  //TODO - title,contents validation
  if (!isUserOwnedReview) {
    throw new HttpError(err.WRONG_ACCESS_REVIEW);
  }

  try {
    await Review.destroy({
      where: {
        id: +reviewId,
        userId,
        productId,
      },
    });
  } catch (error) {
    throw new HttpError(err.DELETE_ERROR);
  }

  res.status(200).json({ success: true });
};

//리뷰 공감/비공감
export const likeReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
};

//유저가 접근한 리뷰가 유저의 리뷰가 맞는지 체크
const isUserReview = async (userId: number, productId: number, reviewId: number) => {
  const reviewSnapshot = await Review.findOne({
    attributes: ['id'],
    where: {
      id: reviewId,
      userId,
      productId,
    },
  });
  return !!reviewSnapshot;
};
