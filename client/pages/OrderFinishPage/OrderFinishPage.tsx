import CartHeader from '@components/Cart/Header/CartHeader';

import { ORDER_FINISH } from '@constants/Cart';
import * as S from './style';

const OrderFinishPage = () => {
  return (
    <S.OrderFinishPage>
      <CartHeader nowStep={ORDER_FINISH}></CartHeader>
    </S.OrderFinishPage>
  );
};

export default OrderFinishPage;
