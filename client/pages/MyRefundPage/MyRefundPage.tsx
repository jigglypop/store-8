import * as S from './style';
import RefundSection from '@client/components/MyPage/RefundSection/RefundSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
import { useDispatch } from 'react-redux';
import { initMyRefund } from '@client/store/myRefund/myRefund';
import { useEffect } from 'react';
import cache from '@client/utils/cache';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';

export default function MyRefundPage() {
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
      dispatch(initMyRefund());
    };
  }, []);

  return (
    <S.MyRefundPage>
      <NavigationSmallBar page="REFUND" />
      <NavigationBar page="REFUND" />
      <RefundSection />
    </S.MyRefundPage>
  );
}
