import React, { ReactElement } from 'react';
import styled from 'styled-components';

import XIcon from '@image/icon/xIcon.svg';

interface Props {
  imgSrc: string;
  idx: number;
  handleDeleteClick: (idx: number) => Promise<void>;
}

export default function ImgItem({ imgSrc, idx, handleDeleteClick }: Props): ReactElement {
  return (
    <StyledImgItem>
      <img src={imgSrc} alt="uploaded-image" />
      <XIcon onClick={() => handleDeleteClick(idx)} className="img-form__delete-btn" />
    </StyledImgItem>
  );
}

const StyledImgItem = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  padding: 0;
  margin-right: 16px;
  img {
    object-fit: cover;
    width: 76px;
    height: 76px;
    border-radius: 8px;
  }

  .img-form__delete-btn {
    position: absolute;
    cursor: pointer;
    top: -8px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    stroke: white;
    background-color: black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    z-index: 10;
  }
`;
