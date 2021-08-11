import React, { ReactElement } from 'react';
import { COUPON_BLOCK_TEXT, CHANGE_COUNT_TEXT, PAY_TYPE_FIRST } from '@constants/Cart';
import { kstFormatter } from '@utils/utils';
import * as S from './style';

import type { CartContentData } from '@src/types/CartContentData';
import { CartContentMetaData } from '@src/types/CartContentMetaData';
import { SHIP_BASE_TEXT } from '@constants/Cart';

interface Contents {
  content: CartContentData;
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
      <td>
        <div className="center-align">
          <input
            type="checkbox"
            onChange={() => {
              toggleHandler(index);
            }}
            checked={content.isChecked}
          ></input>
        </div>
      </td>
      <td>
        <div className="vertical-center-align cart-content-info-container">
          <img src={content.imgLink} />
          <div className="cart-content-text-main">
            {getCouponBlock(content.isCoupon)}
            <p className="cart-content-title">{content.title}</p>
            {getOptionBlock(content.option)}
          </div>
        </div>
      </td>
      <td>
        <div className="cart-count-container center-align">
          <p>{content.count + '개'}</p>
          <button className="center-align">
            <p>{CHANGE_COUNT_TEXT}</p>
          </button>
        </div>
      </td>
      <td>
        <div className="cart-amount-container center-align">
          <p>{kstFormatter(content.amount * content.count)}</p>
        </div>
      </td>
      {getShippment(metaData)}
    </S.CartContent>
  );
}

export default CartContent;
