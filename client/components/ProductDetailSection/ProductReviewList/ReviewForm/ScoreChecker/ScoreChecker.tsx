import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import styled from 'styled-components';

import Star from '@components/common/Star/Star';

interface Props {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export default function ScoreChecker({ score, setScore }: Props): ReactElement {
  const MAX_SCORE = 5;
  const handleClickStar = (idx: number) => setScore(idx + 1);

  const starList = new Array(MAX_SCORE).fill(0).map((_, idx) => {
    return <Star key={idx} isSelect={idx < score} handleClick={() => handleClickStar(idx)} />;
  });

  return <StyledScoreChecker>{starList}</StyledScoreChecker>;
}

const StyledScoreChecker = styled.div`
  display: flex;
  margin-top: 8px;
  & > div {
    cursor: pointer;
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
`;
