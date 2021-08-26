import { IProduct } from '@server/models/Product';
import InnerCard from '@components/InnerCard/InnerCard';
import { IMain } from '../common/type';
import * as S from './style';

const MainNew = ({ main }: IMain) => {
  return (
    <S.MainNew>
      <div className="main-inner">
        <div className="title">
          <h3>새로 나왔어요</h3>
        </div>
        <div className="content">
          {main &&
            main.new.map((item: IProduct, index: number) => (
              <InnerCard key={index} index={index} item={item} />
            ))}
        </div>
      </div>
    </S.MainNew>
  );
};

export default MainNew;
