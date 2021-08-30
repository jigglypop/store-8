import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initMyOrder } from '@client/store/myOrder/myOrder';
import cache from '@client/utils/cache';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';

export default function MyOrderPage() {
  const dispatch = useDispatch();
  const { onChangeRouterAll } = useRouter();

  useEffect(() => {
    const isLoggedIn = cache.get('token');
    if (!isLoggedIn) {
      const to = '/main';
      const RouterObj: IRouterReq = getRouterObj(to);
      onChangeRouterAll(RouterObj);
      history.pushState({ path: to }, to, to);
    }

    return () => {
      dispatch(initMyOrder());
    };
  }, []);

  return (
    <S.MyOrderPage>
      <NavigationSmallBar page="ORDER" />
      <NavigationBar page="ORDER" />
      <OrderSection />
    </S.MyOrderPage>
  );
}
