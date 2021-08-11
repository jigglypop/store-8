import { mainBest } from "../../../constants/dummy";
import Card, { ICardItem } from "../Card";
import * as S from "./style";

const MainBest = () => {
  return (
    <S.MainBest>
      <div className="mainBestInner">
        <div className="title">
          <h3>잘나가요</h3>
        </div>
        <div className="content">
          {mainBest.map((item: ICardItem, index: number) => (
            <Card key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </S.MainBest>
  );
};

export default MainBest;
