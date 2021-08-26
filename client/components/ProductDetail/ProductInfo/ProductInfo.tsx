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
import ProductOption from './ProductOption/ProductOption';

import { useProduct } from '@client/hooks/product/product';

interface Props {}

export default function ProductInfo({}: Props): ReactElement {
  const { product, count, optionCount } = useProduct();
  if (!product) return <></>;

  const { title, originalAmount, amount } = product;

  let totalCount = 0;

  if (Object.keys(optionCount).length) {
    for (const option in optionCount) totalCount += optionCount[option];
  } else {
    totalCount = count;
  }

  return (
    <S.ProductInfo>
      <div className="product__info">
        <h3 className="producto-info__title">{title}</h3>
        {originalAmount ? (
          <div className="product-info__origin-amount">
            <S.InfoTitle>{TITLE_ORIGIN_AMOUNT}</S.InfoTitle>
            <div className="stroke">{kstFormatter(originalAmount, true)}</div>
          </div>
        ) : null}
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
          {product.options.length ? (
            <ProductOption optionData={product.options} />
          ) : (
            <ProductInfoCount />
          )}
        </div>
      </div>
      <div className="product__total-info">
        <S.InfoTitle>{TITLE_TOTAL_AMOUNT}</S.InfoTitle>
        <div className="total-price">{kstFormatter(totalCount * amount, true)}</div>
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
