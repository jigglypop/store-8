import { Link } from '@client/utils/router';
import { IProduct } from '@server/models/Product';
import { dot } from '../../utils/dot';
import Wish from '../Wish/Wish';
import * as S from './style';
import Cart from './Cart/Cart';
import OptionModal from './OptionModal/OptionModal';
import { useCart } from '@client/hooks/product/cart';
import { useState } from 'react';
import { createToast } from '@client/utils/createToast';
import cache from '@utils/cache';
import localCart from '@utils/cart';

interface ICard {
  index: number;
  item: IProduct;
}
const Card = ({ index, item }: ICard) => {
  let imgsrc = item.productImgSrc;
  const { addToCart } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);

  const closeForm = () => {
    setModalOpen(false);
  };

  const confirm = (productOptionId: number | null, productCount: number) => {
    const isLoggedIn = cache.get('token');
    if (isLoggedIn) {
      addToCart({ productId: item.id, productOptionId, productCount });
    } else {
      localCart.add({ productId: item.id, productOptionId, productCount });
    }
    setModalOpen(false);
    createToast('장바구니 추가');
  };

  return (
    <S.Card>
      <div className="cardInner">
        <div className="image">
          <Link to={`/product/${item.id}`}>
            <img src={imgsrc} alt="title" />
          </Link>
          <div className="wc-container">
            <Wish productId={item.id.toString()} name={item.title} />
            <Cart onClick={() => setModalOpen(true)} />
          </div>
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

        <div className="mark"></div>
      </div>
      {isModalOpen && <OptionModal productId={item.id} closeForm={closeForm} confirm={confirm} />}
    </S.Card>
  );
};

export default Card;
