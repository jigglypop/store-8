import { mainSale } from "../../../constants/dummy";
import Card, { ICardItem } from "../Card/Card";
import * as S from "./style";

const MainSale = () => {
  return (
    <S.MainSale>
      <div className="mainSaleInner">
        <div className="title">
          <h3>지금은 할인 중</h3>
        </div>
        <div className="content">
          {mainSale.map((item: ICardItem, index: number) => (
            <Card key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </S.MainSale>
  );
};

export default MainSale;
