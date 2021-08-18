import React, { ReactElement } from 'react';
import PlusCircle from '@image/plusCircle.png';
import EqualCircle from '@image/equalCircle.png';
import { kstFormatter } from '@utils/utils';
import {
  SHIP_HEADER_TEXT,
  TOTAL_TEXT,
  TOTAL_AMOUNT_TEXT,
  KST_AMOUNT_UNIT,
  TOTAL_ADD_TEXT,
} from '@constants/Cart';
import * as S from './style';
import { CartContentMetaData } from '@client/type/CartContentMetaData';

interface MetaData {
  metaData: CartContentMetaData;
  deleteCheckedItem: () => void;
  likeCheckedItem: () => void;
  orderCheckedItem: () => void;
  orderAllItem: () => void;
}

function Receipt({ metaData }: MetaData): ReactElement {
  return (
    <S.Receipt>
      <div className="cart-receipt-container">
        <div>
          <div className="cart-receipt-title-layout cart-select-amount-title">
            <p>{TOTAL_TEXT}</p>
            <p className="cart-title-text-black-large">
              {kstFormatter(metaData.checkedCount, false)}
            </p>
            <p>{TOTAL_AMOUNT_TEXT}</p>
          </div>
          <div className="cart-price-layout">
            <p className="cart-price-text-black-large">
              {kstFormatter(metaData.totalPrice, false)}
            </p>
            <p className="cart-price-text-unit">{KST_AMOUNT_UNIT}</p>
          </div>
        </div>
        <img src={PlusCircle} />
        <div>
          <div className="cart-receipt-title-layout">
            <p>{SHIP_HEADER_TEXT}</p>
          </div>
          <div className="cart-price-layout">
            <p className="cart-price-text-black-large">
              {kstFormatter(metaData.shipmentPrice, false)}
            </p>
            <p className="cart-price-text-unit">{KST_AMOUNT_UNIT}</p>
          </div>
        </div>
        <img src={EqualCircle} />
        <div>
          <div className="cart-receipt-title-layout">
            <p>{TOTAL_ADD_TEXT}</p>
          </div>
          <div className="cart-price-layout">
            <p className="cart-price-text-mint-large">
              {kstFormatter(metaData.totalPrice + metaData.shipmentPrice, false)}
            </p>
            <p className="cart-price-text-unit">{KST_AMOUNT_UNIT}</p>
          </div>
        </div>
      </div>
    </S.Receipt>
  );
}

export default Receipt;
