import React, { ReactElement, useState } from 'react';
import CartContent from './Content/CartContent';
import * as S from './style';
import {
  INFO_HEADER_TEXT,
  COUNT_HEADER_TEXT,
  AMOUNT_HEADER_TEXT,
  SHIP_HEADER_TEXT,
  NOTHING_IN_TEXT,
} from '@constants/Cart';
import { ClientCartData } from '@middle/type/cart/cart';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

interface CartContentProps {
  contents: ClientCartData[];
  metaData: CartContentMetaData;
  toggleAllHandler: () => void;
  toggleOneHandler: (index: number) => void;
}

function CartContentsContainer(props: CartContentProps): ReactElement {
  if (props.metaData.maxLength === 0) {
    return (
      <>
        <S.NothingView>
          <div className="center-align cart-nothing-container">
            <p>{NOTHING_IN_TEXT}</p>
          </div>
        </S.NothingView>
        <S.CartGoToBack>
          <a className="cart-keep-shopping">{'< 쇼핑 계속하기'}</a>
        </S.CartGoToBack>
      </>
    );
  }
  return (
    <>
      <S.CartContainer theme={{ color: 'red' }}>
        <colgroup>
          <col className="cart-content-check-colgroup"></col>
          <col className="cart-content-info-colgroup"></col>
          <col className="cart-content-count-colgroup"></col>
          <col className="cart-content-amount-colgroup"></col>
          <col className="cart-content-ship-colgroup"></col>
        </colgroup>
        <thead className="cart-container-header">
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={() => props.toggleAllHandler()}
                checked={props.metaData.allToggle}
              />
            </th>
            <th>
              <p className="cart-content-title-text">{INFO_HEADER_TEXT}</p>
            </th>
            <th>
              <p className="cart-content-title-text">{COUNT_HEADER_TEXT}</p>
            </th>
            <th>
              <p className="cart-content-title-text">{AMOUNT_HEADER_TEXT}</p>
            </th>
            <th>
              <p className="cart-content-title-text">{SHIP_HEADER_TEXT}</p>
            </th>
          </tr>
        </thead>
        <tbody className="cart-content-body">
          {props.contents.map((content: ClientCartData, index: number) => (
            <CartContent
              content={content}
              key={index}
              index={index}
              toggleHandler={props.toggleOneHandler}
              metaData={props.metaData}
            />
          ))}
        </tbody>
      </S.CartContainer>
      <S.CartGoToBack>
        <a className="cart-keep-shopping">{'< 쇼핑 계속하기'}</a>
      </S.CartGoToBack>
    </>
  );
}

export default CartContentsContainer;
