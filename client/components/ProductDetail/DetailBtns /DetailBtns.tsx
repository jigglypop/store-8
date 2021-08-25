import { ReactElement, useState } from 'react';
import * as S from './style';

import { useWish } from '@client/hooks/wish/wish';
import HeartIcon from '@image/heartIcon.svg';
import { createToast } from '@client/utils/createToast';
import { useCheck } from '@client/hooks/auth/check';
import { useProduct } from '@client/hooks/product/product';
import { useCart } from '@client/hooks/product/cart';
import { Link } from '@utils/router';

interface Props {
  id: number;
  title: string;
}

export default function DetailBtns({ id, title }: Props): ReactElement {
  const { product, count, optionCount } = useProduct();
  const { addToCart } = useCart();
  const { isInMyWish, isLoggedIn, toggleWish } = useWish(id + '', title);
  const { check } = useCheck();
  if (!product) return <></>;

  //TODO 비로그인 시 처리 필요 - 임시로 toast사용
  const handleLikeClick = () => {
    if (isLoggedIn) toggleWish();
    else createToast('로그인이 필요한 서비스입니다.');
  };

  const addProductToCart = async () => {
    if (product?.options.length) {
      for (const [optionId, count] of Object.entries(optionCount)) {
        await addToCart({
          productId: product.id,
          productOptionId: +optionId,
          productCount: count as number,
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
    if (isOptionNotSelected()) return;
    addProductToCart();
  };
  const handleClickCart = () => {
    if (isOptionNotSelected()) return;

    addProductToCart();
    createToast(`${product.title} 장바구니 추가`);
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
    </S.DetailBtns>
  );
}
