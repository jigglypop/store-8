import CartHeader from '@components/Cart/Header/CartHeader';
import AccountInfo from '@components/Order/AccountInfo/AccountInfo';
import OrderDetail from '@components/Order/OrderDetail/OrderDetail';
import OrderReceipt from '@components/Order/OrderReceipt/OrderReceipt';
import UserInfo from '@components/Order/UserInfo/UserInfo';

import { ORDER_START } from '@constants/Cart';
import { getShipmentAmount } from '@utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import * as S from './style';

const OrderPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  /*
  const getTotalPrice = () => {
    let result = 0;
    contents.forEach((content) => {
      if (content.isChecked) result += content.amount * content.count;
    });
    return result;
  };

  const getTotalDiscount = () => {
    let result = 0;
    contents.forEach((content) => {
      if (content.isChecked && content.originalAmount !== 0) {
        result += (content.amount - content.originalAmount) * content.count;
      }
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
      totalDiscount: getTotalDiscount(),
    };
  };
  */

  return (
    <S.OrderPage>
      <CartHeader nowStep={ORDER_START}></CartHeader>
      <div className="cart-side-container">
        <div className="left">
          <OrderDetail></OrderDetail>
          <UserInfo></UserInfo>
          <AccountInfo></AccountInfo>
        </div>
        <div className="cart-receipt-side-container">
          <OrderReceipt></OrderReceipt>
        </div>
      </div>
    </S.OrderPage>
  );
};

export default OrderPage;
