import React, { ReactElement, useState } from 'react';
import * as S from './style';

import LikeBtn from '@image/icon/likeIcon.svg';
import DislikeBtn from '@image/icon/dislikeIcon.svg';
import { IReviewRes } from '@middle/type/review/review';

interface Props {
  reviewData: IReviewRes;
}

export default function ReviewDetail({ reviewData }: Props): ReactElement {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const { id, title, contents, score, date, imgSrc, likeCount, dislikeCount, isLike, isDislike } =
    reviewData;

  //TODO dev일때만 절대경로 설정
  const imgList = imgSrc.map((src) => (
    <img key={id + src} src={'http://localhost:8000/' + src} alt="review-image" />
  ));

  const handleLikeClick = () => {
    if (like) {
      setLike(false);
      return;
    }
    setDislike(false);
    setLike(true);
  };

  const handleDislikeClick = () => {
    if (dislike) {
      setDislike(false);
      return;
    }
    setDislike(true);
    setLike(false);
  };

  return (
    <S.ReviewDetail>
      <div className="review-detail__info">
        <div className="review-detail__contents">{contents}</div>
        <div className="review-detail__like-btns">
          <button
            onClick={handleLikeClick}
            className={like ? 'review__like-btn selected' : 'review__like-btn'}
          >
            <div>공감</div>
            <LikeBtn />
          </button>
          <button
            onClick={handleDislikeClick}
            className={dislike ? 'review__dislike-btn selected' : 'review__dislike-btn'}
          >
            <div>비공감</div>
            <DislikeBtn />
          </button>
        </div>
      </div>
      <div className="review-detail__img">{imgList}</div>
    </S.ReviewDetail>
  );
}
