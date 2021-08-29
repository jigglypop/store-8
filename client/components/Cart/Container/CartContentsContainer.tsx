import React, { ReactElement } from 'react';
import CartContent from './Content/CartContent';
import * as S from './style';
import { NOTHING_IN_TEXT, DELETE_SELECT_PRODUCT } from '@constants/Cart';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';

import { ClientCartData } from '@middle/type/cart/cart';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

interface CartContentProps {
  contents: ClientCartData[];
  metaData: CartContentMetaData;
  toggleAllHandler: () => void;
  changeCartRequest: () => void;
  toggleOneHandler: (index: number) => void;
  changeItem: (index: number, changeAmount: number) => void;
  deleteCheckedItem: () => void;
}

function CartContentsContainer(props: CartContentProps): ReactElement {
  const onClick = () => {
    props.toggleAllHandler();
  };

  const onDelete = () => {
    props.deleteCheckedItem();
  };

  if (props.metaData.maxLength === 0) {
    return (
      <S.CartContainer>
        <div className="nothing-container">
          <p className="nothing-text">{NOTHING_IN_TEXT}</p>
        </div>
      </S.CartContainer>
    );
  }
  return (
    <S.CartContainer>
      <div className="selector-container">
        <img onClick={onClick} src={props.metaData.allToggle ? checked : unchecked} />
        <button onClick={onDelete}>{DELETE_SELECT_PRODUCT}</button>
      </div>
      {props.contents.map((content: ClientCartData, index: number) => {
        return (
          <CartContent
            content={content}
            key={index}
            index={index}
            toggleHandler={props.toggleOneHandler}
            changeItem={props.changeItem}
            changeCartRequest={props.changeCartRequest}
          ></CartContent>
        );
      })}
    </S.CartContainer>
  );
}

export default CartContentsContainer;
