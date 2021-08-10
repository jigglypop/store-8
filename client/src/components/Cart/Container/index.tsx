import React, { ReactElement } from 'react';
import CartContent from '@components/Cart/Content';
import * as S from './style';
import {
  ContentData,
  INFO_HEADER_TEXT,
  COUNT_HEADER_TEXT,
  AMOUNT_HEADER_TEXT,
  SHIP_HEADER_TEXT,
} from '@constants/Cart';

interface ContentDataList {
  contents: ContentData[];
}

function CartContentsContainer({ contents }: ContentDataList): ReactElement {
  return (
    <S.CartContainer>
      <div className="container-header">
        <div className="content-info">
          <p>{INFO_HEADER_TEXT}</p>
        </div>
        <div className="content-count">
          <p>{COUNT_HEADER_TEXT}</p>
        </div>
        <div className="content-amount">
          <p>{AMOUNT_HEADER_TEXT}</p>
        </div>
        <div className="content-ship">
          <p>{SHIP_HEADER_TEXT}</p>
        </div>
      </div>
      {contents.map((content: ContentData, index: number) => (
        <CartContent content={content} key={index} />
      ))}
    </S.CartContainer>
  );
}

export default CartContentsContainer;
