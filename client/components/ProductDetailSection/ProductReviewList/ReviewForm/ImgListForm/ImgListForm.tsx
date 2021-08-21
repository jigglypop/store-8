import React, { ReactElement, Dispatch, SetStateAction } from 'react';

import styled from 'styled-components';

import Plus from '@image/icon/plusIcon.svg';
import ImgItem from './ImgItem';

interface Props {
  imgList: string[];
  setImgList: Dispatch<SetStateAction<string[]>>;
}

export default function ImgListForm({ imgList, setImgList }: Props): ReactElement {
  const MAX_IMG = 8;

  const handleImgSubmit = async () => {
    setImgList([
      'http://localhost:8000/public/image/product/big/1.jpg',
      'http://localhost:8000/public/image/product/big/2.jpg',
      'http://localhost:8000/public/image/product/big/3.jpg',
      'http://localhost:8000/public/image/product/big/4.jpg',
    ]);
  };

  const handleDeleteClick = async (idx: number) => {
    setImgList((imgList) => imgList.filter((_, i) => i !== idx));
  };

  const uploadedImgList = imgList.map((imgSrc, idx) => (
    <ImgItem key={imgSrc} {...{ imgSrc, idx, handleDeleteClick }} />
  ));

  return (
    <StyledImgListFrom>
      <label className="img-form__add-btn" htmlFor="input-file">
        <Plus className="img-form__plus-icon" />
        <div className="img-form__count">
          {imgList.length}/{MAX_IMG}
        </div>
      </label>
      <input type="file" id="input-file" onChange={handleImgSubmit} />
      {uploadedImgList}
    </StyledImgListFrom>
  );
}

const StyledImgListFrom = styled.div`
  display: flex;
  align-items: flex-end;
  overflow-x: scroll;
  width: 100%;
  height: 90px;

  /* color: var(--text-black-dark); */
  color: var(--text-dark-gray);

  &::-webkit-scrollbar {
    display: none;
  }
  input {
    display: none;
  }

  .img-form__plus-icon {
    stroke: var(--line-gray);
    margin-top: 4px;
    margin-bottom: 8px;
  }

  .img-form__add-btn {
    cursor: pointer;
    min-width: 76px;
    height: 76px;
    /* background-color: var(--body-background-dark); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    border: 1px solid var(--line-gray);
    border-radius: 8px;
    .form-img-count {
      font-size: 12px;
      color: var(--gray1);
      margin-top: 7px;
    }
  }
`;
