import { Link } from '@client/utils/router';
import { IProduct } from '@server/models/Product';
import { dot } from '../../utils/dot';
import Wish from '../Wish/Wish';
import * as S from './style';
import Cart from '@components/Card/Cart/Cart';
import OptionModal from '@components/Card/OptionModal/OptionModal';
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
const InnerCard = ({ index, item }: ICard) => {
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
    <S.InnerCard>
      <div className="cardInner">
        <div className="image">
          <Link to={`/product/${item.id}`}>
            <img src={imgsrc} alt="title" loading="lazy" />
          </Link>
          <div className="wc-container">
            <Wish productId={item.id.toString()} name={item.title} isContainer={true} />
            <Cart onClick={() => setModalOpen(true)} />
          </div>
          <div className="card-inner-text-container">
            <div className="text">
              <p className="large">{item.title}</p>
              <div className="text-wrapper">
                {item.sale === 0 ? <></> : <p className="red">{item.sale + '%'}</p>}
                {item.originalAmount === 0 ? (
                  <></>
                ) : (
                  <p className="line">{dot(item.originalAmount) + '원'}</p>
                )}
                <p className="small">{dot(item.amount)} 원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <OptionModal productId={item.id} closeForm={closeForm} confirm={confirm} />}
    </S.InnerCard>
  );
};

export default InnerCard;
