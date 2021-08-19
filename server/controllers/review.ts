import { Request, Response } from 'express';

import { IReviewRes } from './../../middle/type/review/review';

import { err } from '../constants/error';
import Review from '../models/Review';
import HttpError from '../utils/HttpError';
import { decodeToken, getAccessToken } from '../utils/jwt';
import { dateStringFormat } from '../utils/date';
import ReviewImg from '../models/ReviewImg';
import ReviewLike from '../models/ReviewLike';

//리뷰 조회
export const getReview = async (req: Request, res: Response) => {
  const { productId } = req.params;

  if (!productId) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  const reviewSnapshot = await Review.findAll({
    attributes: ['id', 'title', 'contents', 'score', 'createdAt'],
    where: {
      productId,
    },
    order: [['createdAt', 'DESC']],
  });

  const reviews: IReviewRes[] = await Promise.all(
    reviewSnapshot.map(async (item) => {
      const id = item.getDataValue('id');
      const date = item.getDataValue('createdAt');

      if (!id || !date) throw new HttpError(err.CREATE_ERROR);

      const imgSrc = await getReviewImgs(id);

      return {
        id,
        title: item.getDataValue('title'),
        contents: item.getDataValue('contents'),
        score: item.getDataValue('score'),
        date: dateStringFormat(date, '.'),
        imgSrc,
      };
    })
  ).catch((e) => {
    throw new Error(e.message);
  });

  res.status(200).json(reviews);
};

//리뷰 생성
export const createReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;

  const { title, contents, score, imgSrc } = req.body;

  //TODO - title,contents validation
  if (!productId || !title || !contents || score === undefined) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  //TODO transaction 추가
  const createResult = await Review.create({
    userId,
    productId: +productId,
    title: title as string,
    contents: contents as string,
    score: +score,
  });

  const reviewId = createResult.getDataValue('id');

  if (!reviewId) throw new HttpError(err.CREATE_ERROR);

  await createReviewSrc(reviewId, JSON.parse(imgSrc));

  res.status(200).json({ success: true });
};

//리뷰 수정
export const updateReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { productId } = req.params;
  const { reviewId, title, contents, score, imgSrc } = req.body;

  const isUserOwnedReview = await isUserReview(userId, +productId, +reviewId);

  //TODO - title,contents validation
  if (!isUserOwnedReview) {
    throw new HttpError(err.WRONG_ACCESS_REVIEW);
  }

  //TODO 사진 추가

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

  await createReviewSrc(reviewId, JSON.parse(imgSrc));

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

  await Review.destroy({
    where: {
      id: +reviewId,
      userId,
      productId,
    },
  });

  res.status(200).json({ success: true });
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

//리뷰 이미지 조회
const getReviewImgs = async (reviewId: number): Promise<string[]> => {
  const reviewImgSnapshot = await ReviewImg.findAll({
    attributes: ['img_src'],
    where: { reviewId: +reviewId },
  });

  const reviewImgs = reviewImgSnapshot.map((item) => item.img_src);

  return reviewImgs;
};

//리뷰 사진 레코드 생성
const createReviewSrc = async (reviewId: number, imgSrc: string[]) => {
  await ReviewImg.destroy({
    where: {
      reviewId: +reviewId,
    },
  });

  for (const src of imgSrc) {
    await ReviewImg.create({
      reviewId,
      img_src: src,
    });
  }
};

//-------리뷰 공감 비공감 --------------
interface IReviewLike {
  userId: number;
  reviewId: number;
  isLike: boolean;
  isDislike: boolean;
}

//리뷰 공감/비공감
export const likeReview = async (req: Request, res: Response) => {
  //   const accessToken = getAccessToken(req.headers.authorization);
  //   const { id: userId } = decodeToken(accessToken);
  const userId = 1;
  const { reviewId } = req.params;

  const { isLike, isDislike } = req.body;

  const cancelResult = await cancelReviewLike({ isLike, isDislike, userId, reviewId: +reviewId });

  if (cancelResult) {
    res.status(200).json({ success: true });
    return;
  }

  await createReviewLike({ isLike, isDislike, userId, reviewId: +reviewId });

  res.status(200).json({ success: true });
};

//리뷰 공감 비공감 취소처리
const cancelReviewLike = async ({ userId, reviewId, isLike, isDislike }: IReviewLike) => {
  const likeSnapshot = await ReviewLike.findOne({
    attributes: ['isLike', 'isDislike'],
    where: { userId, reviewId },
  });

  const dbIsLike = likeSnapshot?.getDataValue('isLike');
  const dbIsDislike = likeSnapshot?.getDataValue('isDislike');

  if ((isLike && dbIsLike) || (isDislike && dbIsDislike)) {
    await ReviewLike.update(
      { isLike: false, isDislike: false, reviewId, userId },
      {
        where: { userId, reviewId },
      }
    );
    return true;
  }

  return false;
};

// 리뷰 공감 비공감 생성
const createReviewLike = async ({ userId, reviewId, isLike, isDislike }: IReviewLike) => {
  await ReviewLike.destroy({
    where: { userId, reviewId },
  });

  await ReviewLike.create({
    userId,
    reviewId,
    isLike,
    isDislike,
  });
};
