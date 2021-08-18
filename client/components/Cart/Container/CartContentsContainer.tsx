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
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';

import { ClientCartData } from '@middle/type/cart/cart';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

interface CartContentProps {
  contents: ClientCartData[];
  metaData: CartContentMetaData;
  toggleAllHandler: () => void;
  toggleOneHandler: (index: number) => void;
  changeItem: (index: number, changeAmount: number) => void;
  deleteCheckedItem: () => void;
}

function CartContentsContainer(props: CartContentProps): ReactElement {
  const onClick = () => {
    props.toggleAllHandler();
  };

  if (props.metaData.maxLength === 0) {
    return (
      <S.CartContainer>
        <p>{'텅 빈 것 같네요~!'}</p>
      </S.CartContainer>
    );
  }
  return (
    <S.CartContainer>
      <div className="selector-container">
        <img onClick={onClick} src={props.metaData.allToggle ? checked : unchecked} />
        <button>{'선택 상품 삭제'}</button>
      </div>
      {props.contents.map((content: ClientCartData, index: number) => {
        return (
          <CartContent
            content={content}
            key={index}
            index={index}
            toggleHandler={props.toggleOneHandler}
            changeItem={props.changeItem}
          ></CartContent>
        );
      })}
    </S.CartContainer>
  );
}

export default CartContentsContainer;
