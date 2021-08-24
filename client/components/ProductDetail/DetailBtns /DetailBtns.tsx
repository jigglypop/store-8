import { ReactElement, useState } from 'react';
import * as S from './style';

import { useWish } from '@client/hooks/wish/wish';
import HeartIcon from '@image/heartIcon.svg';
import { createToast } from '@client/utils/createToast';
import { useCheck } from '@client/hooks/auth/check';

interface Props {
  id: number;
  title: string;
}

export default function DetailBtns({ id, title }: Props): ReactElement {
  const { isInMyWish, isLoggedIn, toggleWish } = useWish(id + '', title);
  const { check } = useCheck();

  //TODO 비로그인 시 처리 필요 - 임시로 toast사용
  const handleLikeClick = () => {
    if (isLoggedIn) toggleWish();
    else createToast('로그인이 필요한 서비스입니다.');
  };

  return (
    <S.DetailBtns isHeart={isInMyWish}>
      {check && (
        <button className="like-btn" onClick={handleLikeClick}>
          <HeartIcon />
        </button>
      )}
      <button className="cart-btn">장바구니</button>
      <button className="purchase-btn">바로 구매</button>
    </S.DetailBtns>
  );
}
