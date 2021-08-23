import { ReactElement, useState } from 'react';
import * as S from './style';

import Star from '@components/common/Star/Star';
import Clip from '@image/icon/clipIcon.svg';
import { IReview } from '@middle/type/review/review';
import { hideId } from '@utils/encode';
import ReviewDetail from './ReviewDetail/ReviewDetail';

interface Props {
  reviewData: IReview;
  userId: string;
  reviewNo: number;
}

export default function ReviewItem({ reviewData, userId, reviewNo }: Props): ReactElement {
  const MAX_SCORE = 5;
  const { title, score, date, imgSrc, likeCount, dislikeCount } = reviewData;

  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const stars = new Array(MAX_SCORE)
    .fill(0)
    .map((_, idx) => <Star key={idx} isSelect={idx < score} />);

  const isContainImg = !!imgSrc.length;

  const handleReviewClick = () => {
    setIsOpenDetail((isOpenDetail) => !isOpenDetail);
  };

  return (
    <>
      <S.ReviewItem onClick={handleReviewClick}>
        <div>
          <div className="review-info no">{reviewNo}</div>
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
      {isOpenDetail && <ReviewDetail reviewData={reviewData} />}
    </>
  );
}
