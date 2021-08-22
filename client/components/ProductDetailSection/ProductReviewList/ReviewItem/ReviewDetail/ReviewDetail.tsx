import React, { ReactElement, useState } from 'react';
import * as S from './style';

import EditIcon from '@image/icon/editIcon.svg';
import DeleteIcon from '@image/icon/deleteIcon.svg';
import LikeBtn from '@image/icon/likeIcon.svg';
import DislikeBtn from '@image/icon/dislikeIcon.svg';
import { IReview } from '@middle/type/review/review';
import ReviewForm from '@components/ProductDetailSection/ProductReviewList/ReviewForm/ReviewForm';
import DeleteModal from '@components/common/DeleteModal/DeleteModal';
import { useReview } from '@client/hooks/review/review';

interface Props {
  reviewData: IReview;
}

export default function ReviewDetail({ reviewData }: Props): ReactElement {
  const { deleteReview, likeReview } = useReview();
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const { id, title, contents, score, imgSrc, isLike, isDislike, isOwned } = reviewData;

  const imgList = imgSrc.map((src) => <img key={id + src} src={src} alt="review-image" />);

  const handleLikeBtnClick = (type: string) => () => {
    if (type === 'like') likeReview(id, { isLike: true, isDislike: false });
    if (type === 'dislike') likeReview(id, { isLike: false, isDislike: true });
  };

  const handleEditClick = () => setIsEdit(true);

  const handleDeleteClick = () => setIsDelete(true);

  const closeForm = (type: string) => () => {
    type === 'edit' ? setIsEdit(false) : setIsDelete(false);
  };

  const confirmDeleteReview = () => {
    deleteReview({ reviewId: id });
    setIsDelete(false);
  };

  return (
    <S.ReviewDetail>
      {isOwned && (
        <div className="review-detail__btns">
          <EditIcon onClick={handleEditClick} className="review-detail__edit-btn" />
          <DeleteIcon onClick={handleDeleteClick} className="review-detail__delete-btn" />
        </div>
      )}
      <div className="review-detail__info">
        <div className="review-detail__contents">{contents}</div>
        <div className="review-detail__like-btns">
          <button
            onClick={handleLikeBtnClick('like')}
            className={isLike ? 'review__like-btn selected' : 'review__like-btn'}
          >
            <div>공감</div>
            <LikeBtn />
          </button>
          <button
            onClick={handleLikeBtnClick('dislike')}
            className={isDislike ? 'review__dislike-btn selected' : 'review__dislike-btn'}
          >
            <div>비공감</div>
            <DislikeBtn />
          </button>
        </div>
      </div>
      <div className="review-detail__img">{imgList}</div>
      {isEdit && (
        <ReviewForm
          closeReviewForm={closeForm('edit')}
          reviewId={id}
          editTitle={title}
          editContents={contents}
          editImgList={imgSrc}
          editScore={score}
        />
      )}
      {isDelete && (
        <DeleteModal cancelCbFn={closeForm('delete')} deleteCbFn={confirmDeleteReview} />
      )}
    </S.ReviewDetail>
  );
}
