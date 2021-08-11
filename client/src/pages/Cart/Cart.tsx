import React, { ReactElement, useEffect, useState } from 'react';
import CartHeader from '@components/Cart/Header/CartHeader';
import CartContentsContainer from '@components/Cart/Container/CartContentsContainer';
import Receipt from '@components/Cart/Receipt/Receipt';
import Proceed from '@components/Cart/Proceed/Proceed';
import * as S from './style';
import { ORDER_READY, ORDER_START } from '@constants/Cart';
import type { CartContentData } from '@src/types/CartContentData';
import { getShipmentAmount } from '@utils/utils';
import { tempData } from './tempData';

function Cart(): ReactElement {
  const [contents, setContents] = useState(tempData);

  const getTotalPrice = () => {
    let result = 0;
    contents.forEach((content) => {
      if (content.isChecked) result += content.amount * content.count;
    });
    return result;
  };

  const getCheckedNum = () => {
    let result = 0;
    contents.forEach((content) => {
      if (content.isChecked) result += 1;
    });
    return result;
  };

  // 전체 toggle이 켜져있는지 확인하는 함수.
  const isOff = () => {
    let result: boolean = true;

    contents.forEach((content) => {
      if (!content.isChecked) result = false;
    });
    return result;
  };

  const calcMetaData = () => {
    const totalPrice = getTotalPrice();
    return {
      allToggle: isOff(),
      maxLength: contents.length,
      totalPrice: totalPrice,
      checkedCount: getCheckedNum(),
      shipmentPrice: getShipmentAmount(totalPrice),
    };
  };
  console.log(calcMetaData());

  const [metaData, setMetaData] = useState(calcMetaData());

  // Contents 가 바뀔 때 마다 toggle, 가격 등의 변화를 주기 위한 useEffect
  useEffect(() => {
    setMetaData(calcMetaData());
  }, [contents]);

  // 전체 toggle이 켜져있다면 모두 끄고, 꺼져있다면 모두 키는 함수
  const toggleAllHandler = () => {
    const temp: CartContentData[] = [...contents];
    const toggleDest = !isOff();
    temp.forEach((content) => {
      content.isChecked = toggleDest;
    });
    setContents([...temp]);
  };

  // 하나의 check toggle을 관리하는 함수.
  const toggleOneHandler = (index: number) => {
    const temp: CartContentData[] = [...contents];
    temp[index].isChecked = !temp[index].isChecked;
    setContents([...temp]);
  };

  return (
    <S.Cart>
      <CartHeader nowStep={ORDER_READY}></CartHeader>
      <CartContentsContainer
        toggleAllHandler={toggleAllHandler}
        toggleOneHandler={toggleOneHandler}
        contents={contents}
        metaData={metaData}
      />
      <Receipt metaData={metaData} />
      <Proceed contents={contents} metaData={metaData} />
    </S.Cart>
  );
}

export default Cart;
