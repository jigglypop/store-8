import styled from 'styled-components';

export const Button = styled.div`
  .button-base {
    cursor: pointer;
    padding: 0.5rem 2rem;
    box-sizing: content-box;
  }

  .button-background-white {
    background-color: var(--background-white);
    border: 1px solid var(--text-gray);
  }

  .button-background-white:hover {
    background-color: var(--background-gray);
  }

  .button-background-white > p {
    color: var(--text-gray);
  }

  .button-background-white:hover > p {
    color: var(--text-black);
  }

  .button-background-black {
    background-color: var(--background-pastel-black);
    border: 1px solid var(--pastel-black);
  }

  .button-background-black:hover {
    background-color: var(--background-black);
  }

  .button-background-black > p {
    color: var(--text-white);
  }

  .button-background-small {
    width: 80px;
    height: 12px;
    border-radius: 2px;
  }

  .button-background-small > p {
    font-size: var(--body-small-font);
  }

  .button-background-large {
    width: 140px;
    height: 36px;
    border-radius: 4px;
  }

  .button-background-large > p {
    font-size: var(--body-middle-font);
    font-weight: bold;
  }
`;
