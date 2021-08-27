import { IProduct } from '@server/models/Product';
import InnerCard from '@components/InnerCard/InnerCard';
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
              <InnerCard key={index} index={index} item={item} />
            ))}
        </div>
      </div>
    </S.MainSale>
  );
};

export default MainSale;
