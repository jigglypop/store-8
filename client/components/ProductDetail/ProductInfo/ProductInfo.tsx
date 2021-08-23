import React, { ReactElement, useState } from 'react';
import * as S from './style';

import {
  DELIVERY_INFO_FEE,
  DELIVERY_INFO_TIMELIMIT,
  TITLE_ORIGIN_AMOUNT,
  TITLE_SALE_AMOUNT,
  TITLE_DELIVERY,
  TITLE_TOTAL_AMOUNT,
} from '@constants/productDetail/productDetailInfo/productDetailInfo';
import ProductInfoCount from './ProductInfoCount';

interface Props {
  title: string;
  originalAmount?: number;
  amount: number;
}

export default function ProductInfo({ title, originalAmount, amount }: Props): ReactElement {
  const [count, setCount] = useState(1);

  return (
    <S.ProductInfo>
      <div className="product__info">
        <h3 className="producto-info__title">{title}</h3>
        {originalAmount && (
          <div className="product-info__origin-amount">
            <S.InfoTitle>{TITLE_ORIGIN_AMOUNT}</S.InfoTitle>
            <div className="stroke">{kstFormatter(originalAmount, true)}</div>
          </div>
        )}
        <div className="producto-info__amount">
          <S.InfoTitle>{TITLE_SALE_AMOUNT}</S.InfoTitle>
          <div className="price">{kstFormatter(amount, true)}</div>
        </div>
        <div className="producto-info__delivery-info">
          <S.InfoTitle>{TITLE_DELIVERY}</S.InfoTitle>
          <div>
            <div className="delivery-info-fee">{DELIVERY_INFO_FEE}</div>
            <div>{DELIVERY_INFO_TIMELIMIT}</div>
          </div>
        </div>
        <div className="producto-info__count">
          <ProductInfoCount {...{ count, setCount }} />
        </div>
      </div>
      <div className="product__total-info">
        <S.InfoTitle>{TITLE_TOTAL_AMOUNT}</S.InfoTitle>
        <div className="total-price">{kstFormatter(amount * count, true)}</div>
      </div>
    </S.ProductInfo>
  );
}

//여기 utils import에서 에러 발생해서 임시로 가져다 놨습니다.
function kstFormatter(amount: number | void, suffix: boolean = true) {
  if (!amount) return;
  if (suffix) {
    return amount.toLocaleString() + '원';
  } else {
    return amount.toLocaleString();
  }
}
