import React, { ReactElement } from 'react';
import * as S from './style';

interface ButtonProps {
  buttonTitle: string;
  size: string;
  background: string;
  clickHandler: () => void;
}

function Button({ buttonTitle, size, background }: ButtonProps): ReactElement {
  const getButtonBackgroundClass = () => {
    if (background) {
      return `button-background-${background}`;
    } else {
      return `button-background-white`;
    }
  };

  const getButtonBackgroundSize = () => {
    if (size) {
      return `button-background-${size}`;
    } else {
      return `button-background-small`;
    }
  };

  return (
    <S.Button>
      <div
        className={
          'button-base center-align ' + getButtonBackgroundClass() + ' ' + getButtonBackgroundSize()
        }
      >
        <p>{buttonTitle}</p>
      </div>
    </S.Button>
  );
}

export default Button;
