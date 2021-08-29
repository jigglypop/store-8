import React, { ReactElement } from 'react';
import { kstFormatter } from '@utils/utils';
import * as S from './style';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';
import NumAdd from '@image/svg/numAdd.svg';
import NumMinus from '@image/svg/numMinus.svg';

import { ClientCartData } from '@middle/type/cart/cart';

interface Contents {
  content: ClientCartData;
  index: number;
  toggleHandler: (index: number) => void;
  changeCartRequest: () => void;
  changeItem: (index: number, changeAmount: number) => void;
}

function CartContent(props: Contents): ReactElement {
  const onClick = () => {
    props.toggleHandler(props.index);
  };

  const increament = () => {
    props.changeItem(props.index, 1);
    props.changeCartRequest();
  };

  const decrease = () => {
    props.changeItem(props.index, -1);
    props.changeCartRequest();
  };

  const checkOpacity = () => {
    return props.content.isChecked ? '' : ' unchecked-opacity';
  };

  return (
    <S.CartContent>
      {props.content.isChecked ? (
        <img onClick={onClick} className={'check-button checked'} src={checked} />
      ) : (
        <img onClick={onClick} className={'check-button'} src={unchecked} />
      )}
      <img className={'product-image' + checkOpacity()} src={props.content.imgLink} />
      <div className={'product-info-container' + checkOpacity()}>
        <div className="product-title-container">
          <p className="product-title">{props.content.title}</p>
          {props.content.option.length !== 0 ? (
            <p className="product-subtitle">{props.content.option}</p>
          ) : null}
        </div>
        <div className="cart-detail-container">
          <div className="cart-amount-container">
            {props.content.originalAmount !== 0 ? (
              <p className="original-amount">{kstFormatter(props.content.originalAmount)}</p>
            ) : (
              <></>
            )}
            <p className="real-amount">{kstFormatter(props.content.amount)}</p>
          </div>
          <div className="product-count-container">
            <NumMinus onClick={decrease} className="num-scaler" />
            <p className="product-count">{props.content.count}</p>
            <NumAdd onClick={increament} className="num-scaler" />
          </div>
        </div>
      </div>
    </S.CartContent>
  );
}

export default CartContent;
