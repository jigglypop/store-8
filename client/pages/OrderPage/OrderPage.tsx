import CartHeader from '@components/Cart/Header/CartHeader';
import AccountInfo from '@components/Order/AccountInfo/AccountInfo';
import OrderDetail from '@components/Order/OrderDetail/OrderDetail';
import OrderReceipt from '@components/Order/OrderReceipt/OrderReceipt';
import UserInfo from '@components/Order/UserInfo/UserInfo';

import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import type { CouponData } from '@middle/type/Coupon/coupon';
import { ORDER_START } from '@constants/Cart';
import { getMileage, getShipmentAmount } from '@utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import * as S from './style';
import { useState } from 'react';
import CouponModal from '@client/components/Order/CouponModal/CouponModal';

const OrderPage = () => {
  const dispatch = useDispatch();
  const [isOpenForm, setOpenForm] = useState(false);
  const [selectedCoupon, setCoupon] = useState({ title: '', amount: 0, dDay: '' });
  const [mileage, setMileage] = useState(0);
  const { cart } = useSelector((state: RootState) => state.order);

  const getTotalPrice = () => {
    let result = 0;
    cart.forEach((item) => {
      result += item.amount * item.count;
    });
    return result;
  };

  const getTotalDiscount = () => {
    let result = 0;
    cart.forEach((item) => {
      if (item.originalAmount !== 0) {
        result += (item.amount - item.originalAmount) * item.count;
      }
    });
    return result;
  };

  const getTotalMileage = () => {
    let result = 0;
    cart.forEach((item) => {
      result += getMileage(item.amount * item.count);
    });
    return result;
  };

  const calcMetaData = (): OrderContentMetaData => {
    const totalPrice = getTotalPrice();
    return {
      totalPrice: totalPrice,
      totalMileage: getTotalMileage(),
      shipmentPrice: getShipmentAmount(totalPrice),
      totalDiscount: getTotalDiscount() - mileage - selectedCoupon.amount,
      usableMileage: 1830,
    };
  };

  const openForm = () => {
    setOpenForm(true);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  const confirm = (coupon: CouponData) => {
    setCoupon(coupon);
    setOpenForm(false);
  };

  const initCoupon = () => {
    setCoupon({ title: '', amount: 0, dDay: '' });
  };

  const useMileage = (amount: number) => {
    setMileage(amount);
  };

  return (
    <S.OrderPage>
      <CartHeader nowStep={ORDER_START}></CartHeader>
      <div className="cart-side-container">
        <div className="left">
          <OrderDetail contents={cart}></OrderDetail>
          <UserInfo></UserInfo>
          <AccountInfo
            openForm={openForm}
            initCoupon={initCoupon}
            useMileage={useMileage}
            coupon={selectedCoupon}
            metaData={calcMetaData()}
          ></AccountInfo>
        </div>
        <div className="cart-receipt-side-container">
          <OrderReceipt metaData={calcMetaData()}></OrderReceipt>
        </div>
      </div>
      {isOpenForm && <CouponModal closeForm={closeForm} confirm={confirm} />}
    </S.OrderPage>
  );
};

export default OrderPage;
