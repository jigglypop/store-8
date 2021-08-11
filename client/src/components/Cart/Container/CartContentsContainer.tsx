import React, { ReactElement, useState } from 'react';
import CartContent from './Content/CartContent';
import * as S from './style';
import {
  INFO_HEADER_TEXT,
  COUNT_HEADER_TEXT,
  AMOUNT_HEADER_TEXT,
  SHIP_HEADER_TEXT,
} from '@constants/Cart';

import type { CartContentData } from '@src/types/CartContentData';
import type { CartContentMetaData } from '@src/types/CartContentMetaData';

interface CartContentProps {
  contents: CartContentData[];
  metaData: CartContentMetaData;
  toggleAllHandler: () => void;
  toggleOneHandler: (index: number) => void;
}

function CartContentsContainer(props: CartContentProps): ReactElement {
  return (
    <>
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
            <th className="content-center-align">
              <input
                type="checkbox"
                onChange={() => props.toggleAllHandler()}
                checked={props.metaData.allToggle}
              />
            </th>
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
          {props.contents.map((content: CartContentData, index: number) => (
            <CartContent
              content={content}
              key={index}
              index={index}
              toggleHandler={props.toggleOneHandler}
              maxLength={props.metaData.maxLength}
            />
          ))}
        </tbody>
      </S.CartContainer>
      <a className="keep-shopping">{'< 쇼핑 계속하기'}</a>
    </>
  );
}

export default CartContentsContainer;
