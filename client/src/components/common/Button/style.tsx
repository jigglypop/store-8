import styled from 'styled-components';

export const Button = styled.div`
  .button-base {
    cursor: pointer;
    padding: 8px 32px;
    box-sizing: content-box;
  }

  .button-background-white {
    background-color: var(--realWhite);
    border: 1px solid var(--textGrey);
  }

  .button-background-white:hover {
    background-color: var(--textGrey);
  }

  .button-background-white > p {
    color: var(--textGrey);
  }

  .button-background-white:hover > p {
    color: var(--realBlack);
  }

  .button-background-black {
    background-color: var(--pastelBlack);
    border: 1px solid var(--pastelBlack);
  }

  .button-background-black:hover {
    background-color: var(--realBlack);
  }

  .button-background-black > p {
    color: var(--realWhite);
  }

  .button-background-small {
    width: 80px;
    height: 12px;
    border-radius: 2px;
  }

  .button-background-small > p {
    font-size: 12px;
  }

  .button-background-large {
    width: 140px;
    height: 36px;
    border-radius: 4px;
  }

  .button-background-large > p {
    font-size: 14px;
    font-weight: bold;
  }
`;
