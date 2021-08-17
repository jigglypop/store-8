import { Dispatch, ReactElement, SetStateAction } from 'react';
import styled from 'styled-components';

import CheckIcon from '@image/question/checkIcon.svg';

interface Props {
  className?: string;
  isCheck: boolean;
  setIsCheck: Dispatch<SetStateAction<boolean>>;
}

export default function CheckBox({ className, isCheck, setIsCheck }: Props): ReactElement {
  const handleClick = () => {
    setIsCheck((isCheck) => !isCheck);
  };
  return (
    <StyledCheckBox className={className} onClick={handleClick} isCheck={isCheck}>
      <CheckIcon />
    </StyledCheckBox>
  );
}

interface StyleProps {
  isCheck: boolean;
}

const StyledCheckBox = styled.div<StyleProps>`
  cursor: pointer;
  & > svg {
    fill: var(${({ isCheck }) => (isCheck ? '--mint' : '--gray3')});
  }
`;
