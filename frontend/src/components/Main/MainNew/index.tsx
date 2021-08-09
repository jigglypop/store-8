import { mainNew } from "../../../constants/dummy";
import Card, { ICardItem } from "../Card";
import * as S from "./style";

const MainNew = () => {
  return (
    <S.MainNew>
      <div className="mainNewInner">
        <div className="title">
          <h3>새로 나왔어요</h3>
        </div>
        <div className="content">
          {mainNew.map((item: ICardItem, index: number) => (
            <Card key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </S.MainNew>
  );
};

export default MainNew;
