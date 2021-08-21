import React, { ReactElement, useState, MouseEvent } from 'react';
import * as S from './style';

import Modal from '@components/common/Modal/Modal';
import XIcon from '@image/icon/xIcon.svg';
import { useProduct } from '@client/hooks/product/product';
import ImgListForm from './ImgListForm/ImgListForm';

interface Props {
  closeReviewForm: () => void;
  editTitle?: string;
  editContents?: string;
  editImgList?: string[];
}

export default function ReviewForm({
  closeReviewForm,
  editTitle,
  editContents,
  editImgList,
}: Props): ReactElement {
  const isEdit = false;
  const error = 'hello';
  const { product } = useProduct();
  const [title, setTitle] = useState(editTitle ?? '');
  const [contents, setContents] = useState(editContents ?? '');
  //   const [imgList, setImgList] = useState(editImgList ?? []);
  const [imgList, setImgList] = useState([
    'http://localhost:8000/public/image/product/big/1.jpg',
    'http://localhost:8000/public/image/product/big/2.jpg',
  ]);

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setTitle(target.value);
  };

  const handleTextareaChange = ({ target }: { target: HTMLTextAreaElement }) => {
    setContents(target.value);
  };

  const handleSubmitClick = async (e: MouseEvent) => {
    e.preventDefault();
    const reviewFormData = { title, contents };

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
          <img src={'http://localhost:8000/' + product?.productImgSrc} alt="image" />
          <div className="title">{product?.title}</div>
        </div>
        <form>
          <div className="review-form__title-input">
            <div className="title">제목</div>
            <input
              type="text"
              value={title}
              onChange={handleInputChange}
              placeholder="제목을 입력해주세요"
              maxLength={50}
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
                maxLength={5000}
                className="review-form__input"
              ></textarea>
            </div>
          </div>
          <div className="review-form__image-input">
            <div className="title">사진등록</div>
            <ImgListForm {...{ imgList, setImgList }} />
          </div>
          <div className="review-form__error">{error}</div>
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
