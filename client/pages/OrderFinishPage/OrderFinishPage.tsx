import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';

import CartHeader from '@components/Cart/Header/CartHeader';
import OrderFinishContents from '@components/Order/OrderFinishContents/OrderFinishContents';

import { getRouterObj } from '@utils/pathname';

import { ORDER_FINISH } from '@constants/Cart';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { initOrderStatus } from '@store/product/order';
import { RootState } from '@client/store';

const OrderFinishPage = () => {
  const { cart } = useSelector((state: RootState) => state.order);
  const { onChangeRouterAll } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length === 0) {
      const to = '/main';
      const RouterObj: IRouterReq = getRouterObj(to);
      onChangeRouterAll(RouterObj);
      history.pushState({ path: to }, to, to);
    }
  }, [cart]);

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
