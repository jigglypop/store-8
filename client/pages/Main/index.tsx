import Carousel from "../../components/Main/Carousel";
import MainBest from "../../components/Main/MainBest";
import MainGift from "../../components/Main/MainGift";
import MainNew from "../../components/Main/MainNew";
import MainSale from "../../components/Main/MainSale";
import { imageUrls } from "../../constants/dummy";
import * as S from "./style";

const Main = () => {
  return (
    <S.Main>
      <Carousel imageUrls={imageUrls} />
      <MainBest />
      <MainNew />
      <MainGift />
      <MainSale />
    </S.Main>
  );
};

export default Main;
