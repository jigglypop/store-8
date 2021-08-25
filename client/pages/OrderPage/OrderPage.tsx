import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CartHeader from '@components/Cart/Header/CartHeader';
import AccountInfo from '@components/Order/AccountInfo/AccountInfo';
import OrderDetail from '@components/Order/OrderDetail/OrderDetail';
import OrderReceipt from '@components/Order/OrderReceipt/OrderReceipt';
import UserInfo from '@components/Order/UserInfo/UserInfo';
import CouponModal from '@components/Order/CouponModal/CouponModal';
import AddressModal from '@components/Order/AddressModal/AddressModal';

import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import type { CouponData } from '@middle/type/coupon/coupon';
import type { AddressData } from '@middle/type/address/address';
import { ProceedOrderProps } from '@middle/type/product/order';

import { ORDER_START } from '@constants/Cart';
import { RootState } from '@client/store';
import { getMileage, getShipmentAmount } from '@utils/utils';
import * as S from './style';
import { useOrder } from '@client/hooks/order/order';

const OrderPage = () => {
  const { cart } = useSelector((state: RootState) => state.order);
  const [isCouponOpenForm, setCouponOpenForm] = useState(false);
  const [isAddressOpenForm, setAddressOpenForm] = useState(false);
  const { mileage, getUsableMileage } = useOrder();

  const getTotalMileage = () => {
    let result = 0;
    cart.forEach((item) => {
      result += getMileage(item.amount * item.count);
    });
    return result;
  };

  useEffect(() => {
    getUsableMileage();
  }, []);

  const [totalState, setTotalState] = useState<ProceedOrderProps>({
    useCouponId: 0,
    useCouponAmount: 0,
    useMileageAmount: 0,
    addMileageAmount: getTotalMileage(),
    isBase: false,
    addressInfo: {
      addressId: 0,
      title: '',
      address: '',
      extraAddress: '',
      zonecode: '',
      name: '',
      email: '',
      call: '',
      isBase: false,
    },
  });

  const [selectedCoupon, setCoupon] = useState<CouponData>({
    id: 0,
    title: '',
    amount: 0,
    dDay: '',
    isUsed: false,
  });

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

  const calcMetaData = (): OrderContentMetaData => {
    const totalPrice = getTotalPrice();
    return {
      totalPrice: totalPrice,
      totalMileage: getTotalMileage(),
      shipmentPrice: getShipmentAmount(totalPrice),
      totalDiscount: getTotalDiscount(),
      mcDiscount: -1 * (totalState.useMileageAmount + selectedCoupon.amount),
      usableMileage: mileage,
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
    setTotalState({ ...totalState, useCouponId: coupon.id, useCouponAmount: coupon.amount });
    setCouponOpenForm(false);
  };

  const addressConfirm = (address: AddressData) => {
    setTotalState({ ...totalState, addressInfo: address });
    setAddressOpenForm(false);
  };

  const initCoupon = () => {
    setCoupon({ id: 0, title: '', amount: 0, dDay: '', isUsed: false });
    setTotalState({ ...totalState, useCouponId: 0 });
  };

  const useMileage = (amount: number) => {
    setTotalState({ ...totalState, useMileageAmount: amount });
  };

  return (
    <S.OrderPage>
      <CartHeader nowStep={ORDER_START}></CartHeader>
      <div className="cart-side-container">
        <div className="left">
          <OrderDetail contents={cart}></OrderDetail>
          <UserInfo
            totalState={totalState}
            setTotalState={setTotalState}
            openForm={openAddressForm}
          ></UserInfo>
          <AccountInfo
            openForm={openCouponForm}
            initCoupon={initCoupon}
            useMileage={useMileage}
            coupon={selectedCoupon}
            metaData={calcMetaData()}
          ></AccountInfo>
        </div>
        <div className="cart-receipt-side-container">
          <OrderReceipt
            totalState={totalState}
            selectedCoupon={selectedCoupon}
            metaData={calcMetaData()}
          ></OrderReceipt>
        </div>
      </div>
      {isCouponOpenForm && <CouponModal closeForm={closeCouponForm} confirm={couponConfirm} />}
      {isAddressOpenForm && <AddressModal closeForm={closeAddressForm} confirm={addressConfirm} />}
    </S.OrderPage>
  );
};

export default OrderPage;
