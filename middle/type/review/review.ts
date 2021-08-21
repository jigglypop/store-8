export interface IReviewRes {
  id: number;
  title: string;
  contents: string;
  score: number;
  date: string;
  imgSrc: string[];
  likeCount: number;
  dislikeCount: number;
  isLike: boolean;
  isDislike: boolean;
}

export interface IReviewPostReq {
  title: string;
  contents: string;
  score: number;
  imgSrc: string[];
}

export interface IReviewPutReq extends IReviewPostReq {
  reviewId: number;
}

export interface IReviewDeleteReq {
  reviewId: number;
}

export interface IReviewLikeReq {
  isLike: boolean;
  isDislike: boolean;
}
