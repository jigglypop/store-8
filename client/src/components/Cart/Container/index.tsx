import React, { ReactElement } from 'react';
import CartContent from './Content';
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
      <colgroup>
        <col className="content-check"></col>
        <col className="content-info"></col>
        <col className="content-count"></col>
        <col className="content-amount"></col>
        <col className="content-ship"></col>
      </colgroup>
      <thead className="container-header">
        <tr>
          <th className="content-center-align">{getAllChecked()}</th>
          <th className="content-center-align">
            <p className="content-title-text">{INFO_HEADER_TEXT}</p>
          </th>
          <th className="content-center-align">
            <p className="content-title-text">{COUNT_HEADER_TEXT}</p>
          </th>
          <th className="content-center-align">
            <p className="content-title-text">{AMOUNT_HEADER_TEXT}</p>
          </th>
          <th className="content-center-align">
            <p className="content-title-text">{SHIP_HEADER_TEXT}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {contents.map((content: ContentData, index: number) => (
          <CartContent content={content} key={index} />
        ))}
      </tbody>
    </S.CartContainer>
  );
}

export default CartContentsContainer;
