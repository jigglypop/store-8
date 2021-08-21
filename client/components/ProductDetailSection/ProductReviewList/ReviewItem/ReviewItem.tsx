import { ReactElement } from 'react';
import * as S from './style';

import Star from '@components/common/Star/Star';
import Clip from '@image/icon/clipIcon.svg';
import { IReviewRes } from '@middle/type/review/review';
import { hideId } from '@utils/encode';

interface Props {
  reviewData: IReviewRes;
  userId: string;
  idx: number;
}

export default function ReviewItem({ reviewData, userId, idx }: Props): ReactElement {
  const MAX_SCORE = 5;

  const { id, title, contents, score, date, imgSrc, likeCount, dislikeCount, isLike, isDislike } =
    reviewData;

  const stars = new Array(MAX_SCORE).fill(0).map((_, idx) => <Star isSelect={idx < score} />);

  const isContainImg = !!imgSrc.length;

  return (
    <S.ReviewItem>
      <div>
        <div className="review-info no">{idx + 1}</div>
        <div className="review-info score">{stars}</div>
        <div className="review-info title">
          {title}
          {isContainImg && <Clip />}
        </div>
      </div>
      <div>
        <div className="review-info user-id">{hideId(userId)}</div>
        <div className="review-info date">{date}</div>
        <div className="review-info status">
          공감<span>{likeCount}</span>
        </div>
        <div className="review-info status">
          비공감<span>{dislikeCount}</span>
        </div>
      </div>
    </S.ReviewItem>
  );
}
