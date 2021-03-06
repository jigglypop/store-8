interface ICommonReview {
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
  userId: number;
}
export interface IReview extends ICommonReview {
  reviewAuthor: string;
}

export interface IReviewRes {
  totalCount: number;
  reviews: IReview[];
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

export interface IMyReview extends ICommonReview {
  productInfo: {
    id: number;
    title: string | void;
    productImgSrc: string | void;
  };
}

export interface IMyReviewRes {
  totalCount: number;
  reviews: IMyReview[];
}
