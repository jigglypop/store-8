import React, { ReactElement } from 'react';
import { kstFormatter } from '@utils/utils';
import * as S from './style';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';
import NumAdd from '@image/svg/numAdd.svg';
import NumMinus from '@image/svg/numMinus.svg';
import numUp from '@image/numUp.png';
import numDown from '@image/numDown.png';

import { ClientCartData } from '@middle/type/cart/cart';

interface Contents {
  content: ClientCartData;
  index: number;
  toggleHandler: (index: number) => void;
  changeItem: (index: number, changeAmount: number) => void;
}

function CartContent({ content, index, toggleHandler, changeItem }: Contents): ReactElement {
  const onClick = () => {
    toggleHandler(index);
  };

  const increament = () => {
    changeItem(index, 1);
  };

  const decrease = () => {
    changeItem(index, -1);
  };

  const checkOpacity = () => {
    return content.isChecked ? '' : ' unchecked-opacity';
  };

  return (
    <S.CartContent>
      {content.isChecked ? (
        <img onClick={onClick} className={'check-button checked'} src={checked} />
      ) : (
        <img onClick={onClick} className={'check-button'} src={unchecked} />
      )}
      <img className={'product-image' + checkOpacity()} src={content.imgLink} />
      <div className={'product-info-container' + checkOpacity()}>
        <div className="product-title-container">
          <p className="product-title">{content.title}</p>
          {content.option.length !== 0 ? (
            <p className="product-subtitle">{content.option}</p>
          ) : null}
        </div>
        <div className="cart-detail-container">
          <div className="cart-amount-container">
            {content.originalAmount !== 0 ? (
              <p className="original-amount">{kstFormatter(content.originalAmount)}</p>
            ) : (
              <></>
            )}
            <p className="real-amount">{kstFormatter(content.amount)}</p>
          </div>
          <div className="product-count-container">
            <NumAdd onClick={decrease} className="num-scaler" />
            <p className="product-count">{content.count}</p>
            <NumMinus onClick={increament} className="num-scaler" />
          </div>
        </div>
      </div>
    </S.CartContent>
  );
}

export default CartContent;
