import React, { ReactElement } from 'react';
import { kstFormatter } from '@utils/utils';
import exMark from '@image/exclamMark.png';
import { PROCEED_GUIDE_TEXT } from '@constants/Cart';
import * as S from './style';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

interface MetaData {
  metaData: CartContentMetaData;
}

function Receipt({ metaData }: MetaData): ReactElement {
  return (
    <S.ReceiptContainer>
      <S.Receipt>
        <p className="amount-title">{'총계'}</p>
        <div className="amount-row">
          <p>{'총 상품 금액'}</p>
          <p className="amount">{kstFormatter(metaData.totalPrice)}</p>
        </div>
        <div className="amount-row">
          <p>{'총 배송비'}</p>
          <p className="amount">{kstFormatter(metaData.shipmentPrice)}</p>
        </div>
        <div className="amount-row">
          <p>{'총 할인금액'}</p>
          <p className="amount">{kstFormatter(0)}</p>
        </div>
      </S.Receipt>
      <S.TotalPrice>
        <p>{'결제 금액'}</p>
        <p className="amount">{kstFormatter(metaData.totalPrice)}</p>
      </S.TotalPrice>
      <S.OrderNow>
        <button>{'주문하기'}</button>
        <div className="order-info">
          <img src={exMark} />
          <p>{PROCEED_GUIDE_TEXT}</p>
        </div>
      </S.OrderNow>
    </S.ReceiptContainer>
  );
}

export default Receipt;
