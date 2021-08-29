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
import { useDispatch } from 'react-redux';
import { localGetCart } from '@client/store/product/cart';

interface ICard {
  index: number;
  item: IProduct;
}
const Card = ({ index, item }: ICard) => {
  let imgsrc = item.productImgSrc;
  const { addToCart } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const closeForm = () => {
    setModalOpen(false);
  };

  const confirm = (productOptionId: number | null, productCount: number) => {
    const isLoggedIn = cache.get('token');
    if (isLoggedIn) {
      addToCart({ productId: item.id, productOptionId, productCount });
    } else {
      localCart.add({ productId: item.id, productOptionId, productCount });
      // 만약 로그인하지 않았다면 로컬 Storage의 데이터를 cart store에 등록.
      const localCartData = localCart.get();
      dispatch(localGetCart({ data: localCartData }));
    }
    setModalOpen(false);
    createToast('장바구니 추가');
  };

  return (
    <S.Card>
      <div className="cardInner">
        <div className="image">
          <Link to={`/product/${item.id}`}>
            <img src={imgsrc} alt="title" loading="lazy" />
          </Link>
          <div className="wc-container">
            <Wish productId={item.id.toString()} name={item.title} isContainer={true} />
            <Cart onClick={() => setModalOpen(true)} />
          </div>
        </div>
        <div className="text">
          {item.sale === 0 ? (
            <div className="non-red"></div>
          ) : (
            <p className="red">{item.sale + '%'}</p>
          )}
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
