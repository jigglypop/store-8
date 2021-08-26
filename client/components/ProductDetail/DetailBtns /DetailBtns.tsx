import { ReactElement } from 'react';
import * as S from './style';

import { useWish } from '@client/hooks/wish/wish';
import HeartIcon from '@image/heartIcon.svg';
import { createToast } from '@client/utils/createToast';
import { useCheck } from '@client/hooks/auth/check';
import { useProduct } from '@client/hooks/product/product';
import { useCart } from '@client/hooks/product/cart';
import { Link } from '@utils/router';
import { useState } from 'react';
import AlertModal from '@client/components/common/AlertModal/AlertModal';

interface Props {
  id: number;
  title: string;
}

export default function DetailBtns({ id, title }: Props): ReactElement {
  const { product, count, optionCount } = useProduct();
  const { addToCart } = useCart();
  const { isInMyWish, isLoggedIn, toggleWish } = useWish(id + '', title);
  const { check } = useCheck();
  const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  if (!product) return <></>;

  //TODO 비로그인 시 처리 필요 - 임시로 toast사용
  const handleLikeClick = () => {
    if (isLoggedIn) toggleWish();
    else createToast('로그인이 필요한 서비스입니다.');
  };

  const addProductToCart = async () => {
    if (product?.options.length && optionCount) {
      for (const [optionId, count] of Object.entries(optionCount)) {
        await addToCart({
          productId: product.id,
          productOptionId: +optionId,
          productCount: count,
        });
      }
    } else {
      await addToCart({ productId: product.id, productOptionId: null, productCount: count });
    }
  };

  const isOptionNotSelected = () => {
    return product?.options.length && (!optionCount || !Object.keys(optionCount).length);
  };

  const handleClickPurchase = () => {
    if (isOptionNotSelected()) return renderNotOptionAlert();
    addProductToCart();
  };
  const handleClickCart = () => {
    if (isOptionNotSelected()) return renderNotOptionAlert();

    addProductToCart();
    createToast(`${product.title} 장바구니 추가`);
  };

  const closeAlertModal = () => setIsOpenAlertModal(false);

  //옵션 선택 안했을 시 나오는 경고창
  const renderNotOptionAlert = () => {
    setIsOpenAlertModal(true);
    setAlertMsg('제품을 선택해주세요.');
  };

  return (
    <S.DetailBtns isHeart={isInMyWish}>
      {check && (
        <button className="like-btn" onClick={handleLikeClick}>
          <HeartIcon />
        </button>
      )}
      <button className="cart-btn" onClick={handleClickCart}>
        장바구니
      </button>
      <Link className="purchase-btn" to="/cart">
        <button className="purchase-btn" onClick={handleClickPurchase}>
          바로 구매
        </button>
      </Link>
      {isOpenAlertModal && <AlertModal msg={alertMsg} cancelCbFn={closeAlertModal} />}
    </S.DetailBtns>
  );
}
