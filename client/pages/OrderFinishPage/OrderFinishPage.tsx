import CartHeader from '@components/Cart/Header/CartHeader';
import OrderFinishContents from '@components/Order/OrderFinishContents/OrderFinishContents';

import { useRouter } from '@client/hooks/router/router';
import { useDispatch } from 'react-redux';
import { initOrderStatus } from '@store/product/order';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@utils/pathname';

import { ORDER_FINISH } from '@constants/Cart';
import * as S from './style';
import { useEffect } from 'react';

const OrderFinishPage = () => {
  const { onChangeRouterAll } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(initOrderStatus());
      if (window.location.href.includes('finish')) {
        const to = '/main';
        const RouterObj: IRouterReq = getRouterObj(to);
        onChangeRouterAll(RouterObj);
        history.pushState({ path: to }, to, to);
      }
    }, 5000);
  }, []);

  return (
    <S.OrderFinishPage>
      <CartHeader nowStep={ORDER_FINISH}></CartHeader>
      <OrderFinishContents />
    </S.OrderFinishPage>
  );
};

export default OrderFinishPage;
