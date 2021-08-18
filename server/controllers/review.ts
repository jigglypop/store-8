import { Request, Response } from 'express';

import { IQuestionRes } from './../../middle/type/question/question';

import { err } from '../constants/error';
import Review from '../models/Review';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { dateStringFormat } from '../utils/date';

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
