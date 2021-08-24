import { useMain } from '@client/hooks/main/main';
import { IProduct } from '@server/models/Product';
import Card from '../../Card/Card';
import { IMain } from '../common/type';
import * as S from './style';

const MainSale = ({ main }: IMain) => {
  return (
    <S.MainSale>
      <div className="main-inner">
        <div className="title">
          <h3>지금은 할인 중</h3>
        </div>
        <div className="content">
          {main &&
            main.sale.map((item: IProduct, index: number) => (
              <Card key={index} index={index} item={item} />
            ))}
        </div>
      </div>
    </S.MainSale>
  );
};

export default MainSale;
