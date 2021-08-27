import Carousel from '../../components/Main/Carousel/Carousel';
import MainBest from '../../components/Main/MainBest/MainBest';
import MainGift from '../../components/Main/MainGift/MainGift';
import MainNew from '../../components/Main/MainNew/MainNew';
import MainSale from '../../components/Main/MainSale/MainSale';
import MainStore from '../../components/MainStore/MainStore';
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
          <MainSale main={main} />
          <MainGift />
        </S.MainPage>
      ) : (
        <>
          <MainStore main={main} />
        </>
      )}
    </>
  );
};

export default MainPage;
