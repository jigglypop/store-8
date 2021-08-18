import React, { ReactElement } from 'react';
import { COUPON_BLOCK_TEXT, CHANGE_COUNT_TEXT, PAY_TYPE_FIRST } from '@constants/Cart';
import { kstFormatter } from '@utils/utils';
import * as S from './style';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';
import numUp from '@image/numUp.png';
import numDown from '@image/numDown.png';

import { ClientCartData } from '@middle/type/cart/cart';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

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
            <p>{kstFormatter(content.amount)}</p>
          </div>
          <div className="product-count-container">
            <img onClick={decrease} className="num-scaler" src={numDown} />
            <p>{content.count}</p>
            <img onClick={increament} className="num-scaler" src={numUp} />
          </div>
        </div>
      </div>
    </S.CartContent>
  );
}

export default CartContent;
