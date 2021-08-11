import React, { ReactElement } from 'react';
import { COUPON_BLOCK_TEXT, CHANGE_COUNT_TEXT } from '@constants/Cart';
import { kstFormatter } from '@utils/utils';
import * as S from './style';

import type { CartContentData } from '@src/types/CartContentData';

interface Contents {
  content: CartContentData;
  index: number;
  maxLength: number;
  toggleHandler: (index: number) => void;
}

function CartContent({ content, index, maxLength, toggleHandler }: Contents): ReactElement {
  const getCouponBlock = (isCoupon: boolean) => {
    if (isCoupon) {
      return <div className="center-align coupon-badge">{COUPON_BLOCK_TEXT}</div>;
    } else {
      return <></>;
    }
  };

  const getShippment = () => {
    if (index === 0) {
      return (
        <td rowSpan={maxLength}>
          <div className="content-ship">
            <p></p>
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
        <div className="vertical-center-align content-info">
          <img src={content.imgLink} />
          <div className="content-text-main">
            {getCouponBlock(content.isCoupon)}
            <p className="content-title">{content.title}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="count-container center-align">
          <p>{content.count + '개'}</p>
          <button className="center-align">
            <p>{CHANGE_COUNT_TEXT}</p>
          </button>
        </div>
      </td>
      <td>
        <div className="amount-container center-align">
          <p>{kstFormatter(content.amount * content.count)}</p>
        </div>
      </td>
      {getShippment()}
    </S.CartContent>
  );
}

export default CartContent;
