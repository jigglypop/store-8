import { getS3Url } from '@client/utils/getS3Url';
import { Link } from '@client/utils/router';
import { IProduct } from '@server/models/Product';
import { dot } from '../../utils/dot';
import Wish from '../Wish/Wish';
import * as S from './style';

interface ICard {
  index: number;
  item: IProduct;
}
const Card = ({ index, item }: ICard) => {
  // 여기 고쳐야 할듯. s3경로 재설정이 필요합니다.
  let imgsrc = getS3Url(item.productImgSrc);
  if (imgsrc === undefined) {
    imgsrc = `/public/image/product/big/${index + 1}.jpg`;
  }
  return (
    <S.Card>
      <div className="cardInner">
        <div className="image">
          <Link to={`/product/${item.id}`}>
            <img src={imgsrc} alt="title" />
          </Link>
          <Wish productId={item.id.toString()} name={item.title} />
        </div>
        <div className="text">
          <p className="red">{Number(item.sale) === 0 ? '' : item.sale + '%'}</p>
          <p className="large">{item.title}</p>
          <p className="line">{item.originalAmount !== 0 ? dot(item.originalAmount) + '원' : ''}</p>
          <p className="small">{dot(item.amount)} 원</p>
        </div>

        <div className="mark"></div>
      </div>
    </S.Card>
  );
};

export default Card;
