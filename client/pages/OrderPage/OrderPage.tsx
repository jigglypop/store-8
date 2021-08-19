import CartHeader from '@components/Cart/Header/CartHeader';
import { ORDER_START } from '@constants/Cart';
import * as S from './style';

const OrderPage = () => {
  return (
    <S.OrderPage>
      <CartHeader nowStep={ORDER_START}></CartHeader>
    </S.OrderPage>
  );
};

export default OrderPage;
