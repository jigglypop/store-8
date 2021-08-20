import React, { ReactElement } from 'react';
import { Link } from '@utils/router';
import { kstFormatter } from '@utils/utils';
import exMark from '@image/exclamMark.png';
import {
  PROCEED_GUIDE_TEXT,
  TOTAL_DISCOUNT_TEXT,
  TOTAL_PRODUCTS_TEXT,
  TOTAL_SHIPMENT_TEXT,
  TOTAL_RESULT_TEXT,
  TOTAL_ADD_TEXT,
} from '@constants/Cart';
import * as S from './style';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

interface MetaData {
  metaData: CartContentMetaData;
}

function Receipt({ metaData }: MetaData): ReactElement {
  return (
    <S.ReceiptContainer>
      <S.Receipt>
        <p className="amount-title">{TOTAL_RESULT_TEXT}</p>
        <div className="amount-row">
          <p>{TOTAL_PRODUCTS_TEXT}</p>
          <p className="amount">
            {kstFormatter(metaData.totalPrice + Math.abs(metaData.totalDiscount))}
          </p>
        </div>
        <div className="amount-row">
          <p>{TOTAL_SHIPMENT_TEXT}</p>
          <p className="amount">{kstFormatter(metaData.shipmentPrice)}</p>
        </div>
        <div className="amount-row">
          <p>{TOTAL_DISCOUNT_TEXT}</p>
          <p className="amount">{kstFormatter(metaData.totalDiscount)}</p>
        </div>
      </S.Receipt>
      <S.TotalPrice>
        <p>{TOTAL_ADD_TEXT}</p>
        <p className="amount">{kstFormatter(metaData.totalPrice)}</p>
      </S.TotalPrice>
      <S.OrderNow>
        <Link to={'/order'}>
          <button>{'주문하기'}</button>
        </Link>
        <div className="order-info">
          <img src={exMark} />
          <p>{PROCEED_GUIDE_TEXT}</p>
        </div>
      </S.OrderNow>
    </S.ReceiptContainer>
  );
}

export default Receipt;
