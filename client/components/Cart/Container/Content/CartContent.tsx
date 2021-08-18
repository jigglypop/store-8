import React, { ReactElement } from 'react';
import { COUPON_BLOCK_TEXT, CHANGE_COUNT_TEXT, PAY_TYPE_FIRST } from '@constants/Cart';
import { kstFormatter } from '@utils/utils';
import * as S from './style';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';
import numUp from '@image/numUp.png';
import numDown from '@image/numDown.png';

import { SHIP_BASE_TEXT } from '@constants/Cart';
import { ClientCartData } from '@middle/type/cart/cart';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

interface Contents {
  content: ClientCartData;
  metaData: CartContentMetaData;
  index: number;
  toggleHandler: (index: number) => void;
}

function CartContent({ content, index, metaData, toggleHandler }: Contents): ReactElement {
  const getCouponBlock = (isCoupon: boolean) => {
    if (isCoupon) {
      return <div className="center-align cart-coupon-badge">{COUPON_BLOCK_TEXT}</div>;
    } else {
      return <></>;
    }
  };

  const getOptionBlock = (option: string) => {
    if (option.length !== 0) {
      return <div className="cart-option-block">{option}</div>;
    } else {
      return <></>;
    }
  };

  const getShippment = (metaData: CartContentMetaData) => {
    if (index === 0) {
      return (
        <td rowSpan={metaData.maxLength}>
          <div className="center-align cart-ship-container">
            <p>{SHIP_BASE_TEXT}</p>
            <p>{kstFormatter(metaData.shipmentPrice)}</p>
            <p>{PAY_TYPE_FIRST}</p>
          </div>
        </td>
      );
    } else {
      return <></>;
    }
  };

  return (
    <S.CartContent>
      {content.isChecked ? (
        <img className={'check-button checked'} src={checked} />
      ) : (
        <img className={'check-button'} src={unchecked} />
      )}

      <img className="product-image" src={content.imgLink} />
      <div className="product-info-container">
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
            <img className="num-scaler" src={numDown} />
            <p>{content.count}</p>
            <img className="num-scaler" src={numUp} />
          </div>
        </div>
      </div>
    </S.CartContent>
  );
}

export default CartContent;
