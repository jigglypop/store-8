import { useState, useEffect } from 'react';

import CartHeader from '@components/Cart/Header/CartHeader';
import AccountInfo from '@components/Order/AccountInfo/AccountInfo';
import OrderDetail from '@components/Order/OrderDetail/OrderDetail';
import OrderReceipt from '@components/Order/OrderReceipt/OrderReceipt';
import UserInfo from '@components/Order/UserInfo/UserInfo';
import CouponModal from '@components/Order/CouponModal/CouponModal';
import AddressModal from '@components/Order/AddressModal/AddressModal';

import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import type { CouponData } from '@middle/type/Coupon/coupon';
import type { AddressData } from '@middle/type/address/address';
import { ORDER_START } from '@constants/Cart';
import { getMileage, getShipmentAmount } from '@utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import * as S from './style';

const OrderPage = () => {
  const dispatch = useDispatch();
  const [isCouponOpenForm, setCouponOpenForm] = useState(false);
  const [isAddressOpenForm, setAddressOpenForm] = useState(false);
  const [selectedCoupon, setCoupon] = useState({ id: 0, title: '', amount: 0, dDay: '' });
  const [selectedAddress, setAddress] = useState({
    address: '',
    extraAddress: '',
    zonecode: '',
    call: '',
    name: '',
    email: '',
  });
  const [mileage, setMileage] = useState(0);
  const { cart } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const openCouponForm = () => {
    setCouponOpenForm(true);
  };

  const openAddressForm = () => {
    setAddressOpenForm(true);
  };

  const closeCouponForm = () => {
    setCouponOpenForm(false);
  };

  const closeAddressForm = () => {
    setAddressOpenForm(false);
  };

  const couponConfirm = (coupon: CouponData) => {
    setCoupon(coupon);
    setCouponOpenForm(false);
  };

  const addressConfirm = (address: AddressData) => {
    setAddress(address);
    setAddressOpenForm(false);
  };

  const initCoupon = () => {
    setCoupon({ id: 0, title: '', amount: 0, dDay: '' });
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
          <UserInfo selectedAddress={selectedAddress} openForm={openAddressForm}></UserInfo>
          <AccountInfo
            openForm={openCouponForm}
            initCoupon={initCoupon}
            useMileage={useMileage}
            coupon={selectedCoupon}
            metaData={calcMetaData()}
          ></AccountInfo>
        </div>
        <div className="cart-receipt-side-container">
          <OrderReceipt selectedCoupon={selectedCoupon} metaData={calcMetaData()}></OrderReceipt>
        </div>
      </div>
      {isCouponOpenForm && <CouponModal closeForm={closeCouponForm} confirm={couponConfirm} />}
      {isAddressOpenForm && <AddressModal closeForm={closeAddressForm} confirm={addressConfirm} />}
    </S.OrderPage>
  );
};

export default OrderPage;
