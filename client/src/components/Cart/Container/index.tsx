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
  const getAllChecked = () => {
    let result: boolean = true;

    contents.forEach((content) => {
      if (!content.isChecked) result = false;
    });
    if (result) {
      return <input type="checkbox" defaultChecked />;
    } else {
      return <input type="checkbox" />;
    }
  };

  return (
    <S.CartContainer>
      <div className="container-header">
        <div className="content-center-align content-check">{getAllChecked()}</div>
        <div className="content-center-align content-info">
          <p className="content-title-text">{INFO_HEADER_TEXT}</p>
        </div>
        <div className="content-center-align content-count">
          <p className="content-title-text">{COUNT_HEADER_TEXT}</p>
        </div>
        <div className="content-center-align content-amount">
          <p className="content-title-text">{AMOUNT_HEADER_TEXT}</p>
        </div>
        <div className="content-center-align content-ship">
          <p className="content-title-text">{SHIP_HEADER_TEXT}</p>
        </div>
      </div>
      {contents.map((content: ContentData, index: number) => (
        <CartContent content={content} key={index} />
      ))}
    </S.CartContainer>
  );
}

export default CartContentsContainer;
