import React, { ReactElement } from 'react';
import Button from '@components/common/Button/Button';
import ExclamMark from '@image/exclamMark.png';
import * as S from './style';
import type { CartContentData } from '@src/types/CartContentData';
import type { CartContentMetaData } from '@src/types/CartContentMetaData';

interface ProceedType {
  contents: CartContentData[];
  metaData: CartContentMetaData;
}

function Proceed({ contents, metaData }: ProceedType): ReactElement {
  return (
    <S.Proceed>
      <div className="cart-proceed-button-container">
        <div className="cart-proceed-button-side-layout">
          <Button
            buttonTitle="선택 상품 삭제"
            size="small"
            background="white"
            clickHandler={() => {}}
          />
          <Button
            buttonTitle="선택 상품 찜"
            size="small"
            background="white"
            clickHandler={() => {}}
          />
        </div>
        <div className="cart-proceed-button-side-layout">
          <Button
            buttonTitle="선택 상품 주문"
            size="large"
            background="white"
            clickHandler={() => {}}
          />
          <Button
            buttonTitle="전체 상품 주문"
            size="large"
            background="black"
            clickHandler={() => {}}
          />
        </div>
      </div>
      <div className="cart-proceed-guide-container">
        <img src={ExclamMark} />
        <p>{'주문서 작성 단계에서 할인/적립금 적용을 하실 수 있습니다.'}</p>
      </div>
    </S.Proceed>
  );
}

export default Proceed;
