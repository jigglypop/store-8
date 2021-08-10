import React, { ReactElement } from 'react';
import { ContentData, COUPON_BLOCK_TEXT, CHANGE_COUNT_TEXT } from '@constants/Cart';
import { kstFormatter } from '@utils/utils';
import * as S from './style';

interface Contents {
  content: ContentData;
}

function CartContent({ content }: Contents): ReactElement {
  const getCouponBlock = (isCoupon: boolean) => {
    if (isCoupon) {
      return <div className="coupon-badge">{COUPON_BLOCK_TEXT}</div>;
    } else {
      return <></>;
    }
  };
  return (
    <S.CartContent>
      <img src={content.imgLink} />
      <div className="content-main">
        {getCouponBlock(content.isCoupon)}
        <p className="content-title">{content.title}</p>
      </div>
      <div className="count-container">
        <p>{content.count + '개'}</p>
        <button>
          <p>{CHANGE_COUNT_TEXT}</p>
        </button>
      </div>
      <div className="amount-container">
        <p>{kstFormatter(content.amount)}</p>
      </div>
    </S.CartContent>
  );
}

export default CartContent;
