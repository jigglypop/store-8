import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyQuestionSection from '@client/components/MyPage/MyQuestionSection/MyQuestionSection';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
import cache from '@client/utils/cache';
import { useEffect } from 'react';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';

interface Props {}

export default function MyGoodsQAPage() {
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
    <S.MyGoodsQAPage>
      <NavigationSmallBar page="GOODS_QA" />
      <NavigationBar page="GOODS_QA" />
      <MyQuestionSection />
    </S.MyGoodsQAPage>
  );
}
