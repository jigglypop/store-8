import React, { ReactElement } from 'react';
import styled from 'styled-components';
import StarIcon from '@image/icon/starIcon.svg';

interface Props {
  isSelect: boolean;
}

export default function Star({ isSelect }: Props): ReactElement {
  return (
    <StyledStar>
      <StarIcon className={isSelect ? 'selected' : 'not-selected'} />
    </StyledStar>
  );
}

const StyledStar = styled.div`
  .selected {
    fill: var(--tag-picker);
  }

  .not-selected {
    fill: rgba(0, 0, 0, 0);
    stroke: var(--tag-picker);
  }
`;
