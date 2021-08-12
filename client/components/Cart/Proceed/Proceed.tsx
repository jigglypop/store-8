import React, { ReactElement } from 'react';
import ExclamMark from '@image/exclamMark.png';
import * as S from './style';

import {
  DELETE_SELECT_PRODUCT,
  LIKE_SELECT_PRODUCT,
  ORDER_SELECT_PRODUCT,
  ORDER_ALL_PRODUCT,
  PROCEED_GUIDE_TEXT,
} from '@constants/Cart';
import { CartContentData } from '@client/type/CartContentData';
import { CartContentMetaData } from '@client/type/CartContentMetaData';
import Button from '@client/components/Button/Button';

interface ProceedType {
  contents: CartContentData[];
  metaData: CartContentMetaData;
  deleteCheckedItem: () => void;
  likeCheckedItem: () => void;
  orderCheckedItem: () => void;
  orderAllItem: () => void;
}

function Proceed(props: ProceedType): ReactElement {
  if (props.metaData.maxLength === 0) {
    return <></>;
  }
  return (
    <S.Proceed>
      <div className="cart-proceed-button-container">
        <div className="cart-proceed-button-side-layout">
          <Button
            buttonTitle={DELETE_SELECT_PRODUCT}
            size="small"
            background="white"
            clickHandler={() => {
              props.deleteCheckedItem();
            }}
          />
          <Button
            buttonTitle={LIKE_SELECT_PRODUCT}
            size="small"
            background="white"
            clickHandler={() => {
              props.likeCheckedItem();
            }}
          />
        </div>
        <div className="cart-proceed-button-side-layout">
          <Button
            buttonTitle={ORDER_SELECT_PRODUCT}
            size="large"
            background="white"
            clickHandler={() => {
              props.orderCheckedItem();
            }}
          />
          <Button
            buttonTitle={ORDER_ALL_PRODUCT}
            size="large"
            background="black"
            clickHandler={() => {
              props.orderAllItem();
            }}
          />
        </div>
      </div>
      <div className="cart-proceed-guide-container">
        <img src={ExclamMark} />
        <p>{PROCEED_GUIDE_TEXT}</p>
      </div>
    </S.Proceed>
  );
}

export default Proceed;
