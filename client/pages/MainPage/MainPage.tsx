import Carousel from "../../components/Main/Carousel/Carousel";
import MainBest from "../../components/Main/MainBest/MainBest";
import MainGift from "../../components/Main/MainGift/MainGift";
import MainNew from "../../components/Main/MainNew/MainNew";
import MainSale from "../../components/Main/MainSale/MainSale";
import { imageUrls } from "../../constants/dummy";
import * as S from "./style";

const MainPage = () => {
  return (
    <S.MainPage>
      <Carousel imageUrls={imageUrls} />
      <MainBest />
      <MainNew />
      <MainGift />
      <MainSale />
    </S.MainPage>
  );
};

export default MainPage;
