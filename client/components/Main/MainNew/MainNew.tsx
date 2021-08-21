import { useMain } from '@client/hooks/main/main';
import { IProduct } from '@server/models/Product';
import Card from '../../Card/Card';
import * as S from './style';

const MainNew = () => {
  const { main } = useMain();

  return (
    <S.MainNew>
      <div className="main-inner">
        <div className="title">
          <h3>새로 나왔어요</h3>
        </div>
        <div className="content">
          {main &&
            main.new.map((item: IProduct, index: number) => (
              <Card key={index} index={index} item={item} />
            ))}
        </div>
      </div>
    </S.MainNew>
  );
};

export default MainNew;
