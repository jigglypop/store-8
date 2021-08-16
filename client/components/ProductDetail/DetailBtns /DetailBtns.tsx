import { ReactElement, useState } from 'react';
import styled from 'styled-components';

import HeartIcon from '@image/heartIcon.svg';

interface Props {
  id: string;
  isLiked: boolean;
}

export default function DetailBtns({ id, isLiked }: Props): ReactElement {
  const [isHeart, setIsHeart] = useState(isLiked);

  //임시로 렌더링 테스트 나중에는 서버에서 받아와서 적용
  const handleLikeClick = () => setIsHeart((isHeart) => !isHeart);

  return (
    <StyledDetailBtns isHeart={isHeart}>
      <button className="like-btn" onClick={handleLikeClick}>
        <HeartIcon />
      </button>
      <button className="chart-btn">장바구니</button>
      <button className="purchase-btn">바로 구매</button>
    </StyledDetailBtns>
  );
}

interface StyledProps {
  isHeart: boolean;
}

const StyledDetailBtns = styled.div<StyledProps>`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  background-color: var(--white);

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 3px;
  }

  .like-btn {
    background-color: var(--white);
    border: 1px solid var(--gray4);
    width: 50px;
    border-radius: 5px;

    & > svg {
      stroke-width: ${({ isHeart }) => (isHeart ? '0px' : '1px')};
      fill: var(${({ isHeart }) => (isHeart ? '--red' : '--white')});
    }
  }

  .chart-btn {
    width: 170px;
    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--gray4);
    border-radius: 5px;
  }

  .purchase-btn {
    width: 230px;
    color: var(--text-white);
    background-color: var(--mint);
    border-radius: 5px;
  }
`;
