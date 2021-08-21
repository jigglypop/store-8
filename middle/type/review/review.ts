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
