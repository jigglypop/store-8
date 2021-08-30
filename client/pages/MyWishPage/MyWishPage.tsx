import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyWishSection from '@client/components/MyPage/MyWishSection/MyWishSection';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
import cache from '@client/utils/cache';
import { useEffect } from 'react';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';

export default function MyWishPage() {
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
    <S.MyWishPage>
      <NavigationSmallBar page="WISH" />
      <NavigationBar page="WISH" />
      <MyWishSection />
    </S.MyWishPage>
  );
}
