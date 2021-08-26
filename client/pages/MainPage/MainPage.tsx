import Carousel from '@components/Main/Carousel/Carousel';
import MainBest from '@components/Main/MainBest/MainBest';
import MainGift from '@components/Main/MainGift/MainGift';
import MainNew from '@components/Main/MainNew/MainNew';
import MainSale from '@components/Main/MainSale/MainSale';
import MainRecommend from '@components/Main/MainRecommend/MainRecommend';
// import MainStore from '../../components/MainStore/MainStore';
import { useMain } from '@client/hooks/main/main';
import { useStoreMode } from '@client/hooks/storemode/storemode';
import * as S from './style';

const MainPage = () => {
  const { storemode } = useStoreMode();
  const { main } = useMain();
  return (
    <>
      {storemode ? (
        <S.MainPage>
          <Carousel />
          <MainBest main={main} />
          <MainNew main={main} />
          <MainSale main={main} />
          <MainGift />
          <MainRecommend />
        </S.MainPage>
      ) : (
        <>{/* <MainStore /> */}</>
      )}
    </>
  );
};

export default MainPage;
