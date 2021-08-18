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
};

//리뷰 삭제
export const deleteReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
};

//리뷰 공감/비공감
export const likeReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
};
