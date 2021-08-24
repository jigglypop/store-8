import { Request, Response } from 'express';

import { IReview } from './../../middle/type/review/review';

import { err } from '../constants/error';
import Review from '../models/Review';
import HttpError from '../utils/HttpError';
import { dateStringFormat } from '../utils/date';
import ReviewImg from '../models/ReviewImg';
import ReviewLike from '../models/ReviewLike';
import { DEFAULT_REVIEW_LIMIT, DEFAULT_REVIEW_PAGE } from './../../middle/constants/default';

//리뷰 조회
export const getReview = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { page, limit } = req.query;
  const { userId } = req.body;

  let _page: number = DEFAULT_REVIEW_PAGE;
  let _limit: number = DEFAULT_REVIEW_LIMIT;

  if (!productId) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  if (page) {
    _page = +page - 1;
  }
  if (limit) {
    _limit = +limit;
  }

  const reviewSnapshot = await Review.findAndCountAll({
    attributes: ['id', 'title', 'contents', 'score', 'createdAt', 'userId'],
    where: {
      productId,
    },
    order: [['createdAt', 'DESC']],
    offset: _page * _limit,
    limit: _limit,
  });

  const reviews: IReview[] = await Promise.all(
    reviewSnapshot.rows.map(async (item) => {
      const id = item.getDataValue('id');
      const date = item.getDataValue('createdAt');

      if (!id || !date) throw new HttpError(err.CREATE_ERROR);

      const imgSrc = await getReviewImgs(id);

      const { likeCount, dislikeCount } = await getReviewLikeCount(id);
      const { isLike, isDislike } = await isUserLikeReview(id, userId);

      return {
        id,
        title: item.getDataValue('title'),
        contents: item.getDataValue('contents'),
        score: item.getDataValue('score'),
        date: dateStringFormat(date, '.'),
        imgSrc,
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

//리뷰 생성
export const createReview = async (req: Request, res: Response) => {
  const { productId } = req.params;

  const { title, contents, score, imgSrc, userId } = req.body;

  //TODO - title,contents validation
  if (!productId || !title || !contents || score === undefined) {
    throw new HttpError(err.INVALID_INPUT_ERROR);
  }

  //TODO transaction 추가
  const createResult = await Review.create({
    userId,
    productId: +productId,
    title: title,
    contents: contents,
    score: +score,
  });

  const reviewId = createResult.getDataValue('id');

  if (!reviewId) throw new HttpError(err.CREATE_ERROR);

  await createReviewSrc(reviewId, imgSrc);

  res.status(200).json({ success: true });
};

//리뷰 수정
export const updateReview = async (req: Request, res: Response) => {
  const { reviewId, title, contents, score, imgSrc, userId } = req.body;

  const isUserOwnedReview = await isUserReview(userId, +reviewId);

  //TODO - title,contents validation
  if (!isUserOwnedReview) {
    throw new HttpError(err.WRONG_ACCESS_REVIEW);
  }

  await Review.update(
    {
      title,
      contents,
      score: +score,
      userId,
    },
    {
      where: {
        id: +reviewId,
        userId,
      },
    }
  );

  await createReviewSrc(reviewId, imgSrc);

  res.status(200).json({ success: true });
};

//리뷰 삭제
export const deleteReview = async (req: Request, res: Response) => {
  const { reviewId, userId } = req.body;

  const isUserOwnedReview = await isUserReview(userId, +reviewId);

  //TODO - title,contents validation
  if (!isUserOwnedReview) {
    throw new HttpError(err.WRONG_ACCESS_REVIEW);
  }

  await Review.destroy({
    where: {
      id: +reviewId,
      userId,
    },
  });

  res.status(200).json({ success: true });
};

//유저가 접근한 리뷰가 유저의 리뷰가 맞는지 체크
const isUserReview = async (userId: number, reviewId: number) => {
  const reviewSnapshot = await Review.findOne({
    attributes: ['id'],
    where: {
      id: reviewId,
      userId,
    },
  });
  return !!reviewSnapshot;
};

//리뷰 이미지 조회
export const getReviewImgs = async (reviewId: number): Promise<string[]> => {
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

//TODO - transaction
//리뷰 공감/비공감
export const likeReview = async (req: Request, res: Response) => {
  const { reviewId } = req.params;

  const { isLike, isDislike, userId } = req.body;

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

//공감 비공감 개수
const getReviewLikeCount = async (reviewId: number) => {
  const likeCount = await ReviewLike.count({
    where: { reviewId, isLike: true },
  });
  const dislikeCount = await ReviewLike.count({
    where: { reviewId, isDislike: true },
  });

  return { likeCount, dislikeCount };
};
//유저의 공감 비공감 상태
const isUserLikeReview = async (reviewId: number, userId: number) => {
  const isLike = await ReviewLike.count({
    where: { reviewId, userId, isLike: true },
  });
  const isDislike = await ReviewLike.count({
    where: { reviewId, userId, isDislike: true },
  });

  return { isLike: !!isLike, isDislike: !!isDislike };
};
