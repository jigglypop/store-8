import { ReactElement } from 'react';
import * as S from './style';
import NextIcon from '@image/svg/next.svg';

import { ORDER_FINISH, ORDER_READY, ORDER_START } from '@constants/Cart';

interface CartHeaderProps {
  nowStep: number;
}

function CartHeader({ nowStep }: CartHeaderProps): ReactElement {
  const getImgSourceStep = (destStep: number) => {
    return nowStep === destStep ? 'now-step' : 'not-step';
  };
  const getTextColorStep = (destStep: number) => {
    return nowStep === destStep ? 'cart-progress' : 'cart-wait';
  };
  return (
    <S.CartHeader>
      <div className="cart-header-container">
        <h2 className="cart-header-title">장바구니</h2>
        <div className="cart-progress-container">
          <p className={getTextColorStep(ORDER_READY)}>장바구니</p>
          <NextIcon className={getImgSourceStep(ORDER_READY)} />
          <p className={getTextColorStep(ORDER_START)}>주문서작성</p>
          <NextIcon className={getImgSourceStep(ORDER_START)} />
          <p className={getTextColorStep(ORDER_FINISH)}>주문완료</p>
        </div>
      </div>
    </S.CartHeader>
  );
}

export default CartHeader;
