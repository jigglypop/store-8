import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyReviewSection from '@client/components/MyPage/MyReviewSection/MyReviewSection';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
import cache from '@client/utils/cache';
import { useEffect } from 'react';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';

interface Props {}

export default function MyGoodsReviewPage() {
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
    <S.MyGoodsReviewPage>
      <NavigationSmallBar page="GOODS_REVIEW" />
      <NavigationBar page="GOODS_REVIEW" />
      <MyReviewSection />
    </S.MyGoodsReviewPage>
  );
}
