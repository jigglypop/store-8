import * as S from './style';
import AddressSection from '@components/MyPage/AddressSection/AddressSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
import cache from '@client/utils/cache';
import { useEffect } from 'react';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';

export default function MyAddressPage() {
  const { onChangeRouterAll } = useRouter();

  useEffect(() => {
    const isLoggedIn = cache.get('token');
    if (!isLoggedIn) {
      const to = '/main';
      const RouterObj: IRouterReq = getRouterObj(to);
      onChangeRouterAll(RouterObj);
      history.pushState({ path: to }, to, to);
    }
  }, []);

  return (
    <S.MyAddressPage>
      <NavigationSmallBar page="ADDRESS" />
      <NavigationBar page="ADDRESS" />
      <AddressSection />
    </S.MyAddressPage>
  );
}
