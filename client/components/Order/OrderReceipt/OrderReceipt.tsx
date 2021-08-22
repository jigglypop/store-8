import React, { ReactElement } from 'react';
import { Link } from '@utils/router';
import { kstFormatter } from '@utils/utils';
import exMark from '@image/exclamMark.png';
import {
  CALC_GUIDE_TEXT,
  TOTAL_DISCOUNT_TEXT,
  TOTAL_PRODUCTS_TEXT,
  TOTAL_SHIPMENT_TEXT,
  TOTAL_RESULT_TEXT,
  TOTAL_ADD_TEXT,
} from '@constants/Cart';
import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import * as S from './style';
import { CouponData } from '@middle/type/Coupon/coupon';

import { useOrder } from '@client/hooks/order/order';
interface MetaData {
  metaData: OrderContentMetaData;
  selectedCoupon: CouponData;
}

const OrderReceipt = ({ selectedCoupon, metaData }: MetaData): ReactElement => {
  const { proceedOrder } = useOrder();
  return (
    <S.OrderReceipt>
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
        <button
          onClick={() => {
            proceedOrder(selectedCoupon.id);
          }}
        >
          {'주문하기'}
        </button>
        <div className="order-info">
          <img src={exMark} />
          <p>{CALC_GUIDE_TEXT}</p>
        </div>
      </S.OrderNow>
    </S.OrderReceipt>
  );
};

export default OrderReceipt;
