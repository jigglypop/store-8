import React, { ReactElement } from 'react';
import styled from 'styled-components';
import StarIcon from '@image/icon/starIcon.svg';

interface Props {
  isSelect: boolean;
  handleClick?: () => void;
}

export default function Star({ isSelect, handleClick }: Props): ReactElement {
  return (
    <StyledStar onClick={handleClick}>
      <StarIcon className={isSelect ? 'selected' : 'not-selected'} />
    </StyledStar>
  );
}

const StyledStar = styled.div`
  & > svg {
    width: 20px;
    height: 20px;
  }

  .selected {
    fill: var(--tag-picker);
  }

  .not-selected {
    fill: rgba(0, 0, 0, 0);
    stroke: var(--tag-picker);
  }
`;
