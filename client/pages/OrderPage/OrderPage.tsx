import CartHeader from '@components/Cart/Header/CartHeader';
import AccountInfo from '@components/Order/AccountInfo/AccountInfo';
import OrderDetail from '@components/Order/OrderDetail/OrderDetail';
import OrderReceipt from '@components/Order/OrderReceipt/OrderReceipt';
import UserInfo from '@components/Order/UserInfo/UserInfo';

import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import { ORDER_START } from '@constants/Cart';
import { getMileage, getShipmentAmount } from '@utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import * as S from './style';

const OrderPage = () => {
  const dispatch = useDispatch();
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
      totalDiscount: getTotalDiscount(),
      usableMileage: 1830,
    };
  };

  return (
    <S.OrderPage>
      <CartHeader nowStep={ORDER_START}></CartHeader>
      <div className="cart-side-container">
        <div className="left">
          <OrderDetail contents={cart}></OrderDetail>
          <UserInfo></UserInfo>
          <AccountInfo
            coupon={{ title: '안녕 감사쿠폰', amount: 3000, dDay: '2021.08.21' }}
            metaData={calcMetaData()}
          ></AccountInfo>
        </div>
        <div className="cart-receipt-side-container">
          <OrderReceipt metaData={calcMetaData()}></OrderReceipt>
        </div>
      </div>
    </S.OrderPage>
  );
};

export default OrderPage;
