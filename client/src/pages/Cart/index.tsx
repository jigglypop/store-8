import React, { ReactElement } from 'react';
import CartHeader from '@components/Cart/Header';
import CartContentsContainer from '@components/Cart/Container';
import Receipt from '@components/Cart/Receipt';
import * as S from './style';
import { ORDER_READY, ORDER_START } from '@constants/Cart';
import { tempData } from './tempData';

function Cart(): ReactElement {
  return (
    <S.Cart>
      <CartHeader nowStep={ORDER_READY}></CartHeader>
      <CartContentsContainer contents={tempData} />
      <Receipt />
    </S.Cart>
  );
}

export default Cart;
