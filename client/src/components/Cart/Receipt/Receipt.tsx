import React, { ReactElement } from 'react';
import { CartContentMetaData } from '@src/types/CartContentMetaData';
import PlusCircle from '@image/plusCircle.png';
import EqualCircle from '@image/eqaulCirlce.png';
import { kstFormatter } from '@src/utils/utils';
import * as S from './style';

interface MetaData {
  metaData: CartContentMetaData;
}

function Receipt({ metaData }: MetaData): ReactElement {
  return (
    <S.Receipt>
      <div className="cart-receipt-container">
        <div>
          <div className="cart-receipt-title-layout cart-select-amount-title">
            <p>{'총'}</p>
            <p className="cart-title-text-black-large">
              {kstFormatter(metaData.checkedCount, false)}
            </p>
            <p>{'개의 상품금액'}</p>
          </div>
          <div className="cart-price-layout">
            <p className="cart-price-text-black-large">
              {kstFormatter(metaData.totalPrice, false)}
            </p>
            <p className="cart-price-text-unit">{'원'}</p>
          </div>
        </div>
        <img src={PlusCircle} />
        <div>
          <div className="cart-receipt-title-layout">
            <p>{`배송비`}</p>
          </div>
          <div className="cart-price-layout">
            <p className="cart-price-text-black-large">
              {kstFormatter(metaData.shipmentPrice, false)}
            </p>
            <p className="cart-price-text-unit">{'원'}</p>
          </div>
        </div>
        <img src={EqualCircle} />
        <div>
          <div className="cart-receipt-title-layout">
            <p>{`합계`}</p>
          </div>
          <div className="cart-price-layout">
            <p className="cart-price-text-mint-large">
              {kstFormatter(metaData.totalPrice + metaData.shipmentPrice, false)}
            </p>
            <p className="cart-price-text-unit">{'원'}</p>
          </div>
        </div>
      </div>
    </S.Receipt>
  );
}

export default Receipt;
