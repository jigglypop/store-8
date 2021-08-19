import CartHeader from '@components/Cart/Header/CartHeader';
import AccountInfo from '@components/Order/AccountInfo/AccountInfo';
import OrderDetail from '@components/Order/OrderDetail/OrderDetail';
import OrderReceipt from '@components/Order/OrderReceipt/OrderReceipt';
import UserInfo from '@components/Order/UserInfo/UserInfo';

import { ORDER_START } from '@constants/Cart';
import * as S from './style';

const OrderPage = () => {
  return (
    <S.OrderPage>
      <CartHeader nowStep={ORDER_START}></CartHeader>
      <div className="cart-side-container">
        <div className="placeHolder left">
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
