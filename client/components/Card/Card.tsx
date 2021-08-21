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
  let imgsrc = item.productImgSrc;
  if (imgsrc === undefined) {
    imgsrc = `public/image/product/big/${index + 1}.jpg`;
  }
  return (
    <S.Card>
      <div className="cardInner">
        <div className="image">
          <Link to={`/product/${item.id}`}>
            <img src={'/' + imgsrc} alt="title" />
          </Link>
          <Wish productId={item.id.toString()} name={item.title} />
          {/* <div className="underbutton">
            <button className="smallbutton">
              <i className="far fa-heart"></i>
            </button>
            <button className="smallbutton">
              <i className="fas fa-cart-plus"></i>
            </button>
          </div> */}
        </div>
        <div className="text">
          <p className="red">{Number(item.sale) === 0 ? '' : item.sale + '%'}</p>
          <p className="large">{item.title}</p>
          <p className="line">{item.originalAmount !== 0 ? dot(item.originalAmount) + '원' : ''}</p>
          <p className="small">{dot(item.amount)} 원</p>
        </div>

        <div className="mark">
          {/* {item.tagType === 1 ? (
            <button className="green">
              <p className="marktext">GREEN</p>
            </button>
          ) : (
            ""
          )}
          {item.tagType <= 1 ? (
            <button className="new">
              <p className="marktext">NEW</p>
            </button>
          ) : (
            ""
          )}
          {item.tagType === 0 ? (
            <button className="sale">
              <p className="marktext">SALE</p>
            </button>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </S.Card>
  );
};

export default Card;
