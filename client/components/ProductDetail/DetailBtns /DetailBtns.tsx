import { ReactElement, useState } from 'react';
import styled from '@lib/styledComponent';
import * as S from './style';

import HeartIcon from '@image/heartIcon.svg';

interface Props {
  id: number;
  isLiked: boolean;
}

export default function DetailBtns({ id, isLiked }: Props): ReactElement {
  const [isHeart, setIsHeart] = useState(isLiked);

  //임시로 렌더링 테스트 나중에는 서버에서 받아와서 적용
  const handleLikeClick = () => setIsHeart((isHeart) => !isHeart);

  return (
    <S.DetailBtns isHeart={isHeart}>
      <button className="like-btn" onClick={handleLikeClick}>
        <HeartIcon />
      </button>
      <button className="cart-btn">장바구니</button>
      <button className="purchase-btn">바로 구매</button>
    </S.DetailBtns>
  );
}
