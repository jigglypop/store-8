import Carousel from '../../components/Main/Carousel/Carousel';
import MainBest from '../../components/Main/MainBest/MainBest';
import MainGift from '../../components/Main/MainGift/MainGift';
import MainNew from '../../components/Main/MainNew/MainNew';
import MainSale from '../../components/Main/MainSale/MainSale';
import { useMain } from '../../hooks/main/main';
import { useStoreMode } from '../../hooks/storemode/storemode';
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
          <MainGift />
          <MainSale main={main} />
        </S.MainPage>
      ) : (
        <>
          <h1>메인</h1>
        </>
      )}
    </>
  );
};

export default MainPage;
