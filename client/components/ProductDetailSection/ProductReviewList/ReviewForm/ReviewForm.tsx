import { ReactElement, useState, MouseEvent } from 'react';
import * as S from './style';

import Modal from '@components/common/Modal/Modal';
import XIcon from '@image/icon/xIcon.svg';
import ImgListForm from './ImgListForm/ImgListForm';
import ScoreChecker from './ScoreChecker/ScoreChecker';

import { useProduct } from '@client/hooks/product/product';
import { useReview } from '@client/hooks/review/review';
import { IProductInfo } from '@middle/type/product/product';

interface Props {
  closeReviewForm: () => void;
  reviewId?: number;
  editTitle?: string;
  editContents?: string;
  editImgList?: string[];
  editScore?: number;
  productInfo?: IProductInfo;
}

export default function ReviewForm({
  closeReviewForm,
  reviewId,
  editTitle,
  editContents,
  editImgList,
  editScore,
  productInfo,
}: Props): ReactElement {
  const isEdit = reviewId !== undefined;
  const { product } = useProduct();
  const { createReview, updateReview, error } = useReview();
  const [formError, setFormError] = useState('');
  const [title, setTitle] = useState(editTitle ?? '');
  const [contents, setContents] = useState(editContents ?? '');
  const [score, setScore] = useState(editScore ?? 0);
  const [imgList, setImgList] = useState(editImgList ?? []);

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    if (target.value.length > 60) {
      setFormError('제목은 최대 60자까지만 입력 가능합니다.');
      return;
    }

    if (formError) setFormError('');

    setTitle(target.value);
  };

  const handleTextareaChange = ({ target }: { target: HTMLTextAreaElement }) => {
    if (target.value.length > 500) {
      setFormError('내용은 최대 500자까지만 입력 가능합니다.');
      return;
    }

    if (formError) setFormError('');

    setContents(target.value);
  };

  //리뷰 생성 or 수정
  const handleSubmitClick = async (e: MouseEvent) => {
    e.preventDefault();
    if (!score) {
      setFormError('별점를 입력해주세요!');
      return;
    }

    const reviewFormData = { title, contents, score, imgSrc: imgList };
    let isSuccess: boolean = false;

    if (isEdit) {
      if (!reviewId) return;
      isSuccess = await updateReview({ reviewId, ...reviewFormData });
    } else {
      isSuccess = await createReview(reviewFormData);
    }

    if (!isSuccess) return;
    closeReviewForm();
  };

  const isAbleSubmit = !!(title && contents);
  return (
    <Modal>
      <S.ReviewForm>
        <div className="review-form__header">
          <h2>{isEdit ? '상품후기 수정하기' : '상품후기 작성하기'}</h2>
          <div className="cancel-btn" onClick={closeReviewForm}>
            <XIcon />
          </div>
        </div>
        <div className="review-form__title">
          <img src={productInfo?.productImgSrc || product?.productImgSrc} alt="image" />
          <div className="title">
            <div>{productInfo?.title || product?.title}</div>
            <ScoreChecker {...{ score, setScore }} />
          </div>
        </div>
        <form>
          <div className="review-form__title-input">
            <div className="title">제목</div>
            <input
              type="text"
              value={title}
              onChange={handleInputChange}
              placeholder="제목을 입력해주세요"
              maxLength={60}
              className="review-form__input"
            />
          </div>
          <div className="review-form__contents-input">
            <div className="title">내용</div>
            <div className="textarea-wrapper">
              <textarea
                placeholder="내용을 입력해주세요 (최대 5000자까지 입력가능)"
                value={contents}
                onChange={handleTextareaChange}
                maxLength={500}
                className="review-form__input"
              ></textarea>
            </div>
          </div>
          <div className="review-form__image-input">
            <div className="title">사진등록</div>
            <ImgListForm {...{ imgList, setImgList, formError, setFormError }} />
          </div>
          <div className="review-form__error">{formError || error}</div>
          <div className="review-form__btns">
            <button className="cancel-btn" onClick={closeReviewForm}>
              취소
            </button>
            <button className="submit-btn" disabled={!isAbleSubmit} onClick={handleSubmitClick}>
              {isEdit ? '수정' : '등록'}
            </button>
          </div>
        </form>
      </S.ReviewForm>
    </Modal>
  );
}
