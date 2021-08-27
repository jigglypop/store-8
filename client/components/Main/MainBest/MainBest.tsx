import { IProduct } from '@server/models/Product';
import Card from '@components/Card/Card';
import InnerCard from '@components/InnerCard/InnerCard';
import { IMain } from '../common/type';
import * as S from './style';

const MainBest = ({ main }: IMain) => {
  return (
    <S.MainBest>
      <div className="main-inner">
        <div className="title">
          <h3>잘나가요</h3>
        </div>
        <div className="content">
          {main &&
            main.best.map((item: IProduct, index: number) => (
              <Card key={index} index={index} item={item} />
            ))}
        </div>
      </div>
    </S.MainBest>
  );
};

export default MainBest;
