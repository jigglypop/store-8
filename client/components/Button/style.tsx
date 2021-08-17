import styled from '@lib/styledComponent';

export const Button = styled.div`
  .button-base {
    cursor: pointer;
    @media only screen and (min-width: 375px) {
      padding: 0.25rem 1rem;
    }
    @media only screen and (min-width: 768px) {
      padding: 0.5rem 1rem;
    }
    @media only screen and (min-width: 1300px) {
      padding: 0.5rem 2rem;
    }
    box-sizing: content-box;
  }

  .button-background-white {
    background-color: var(--background-white);
    border: 1px solid var(--text-gray);
    &:hover {
      background-color: var(--background-gray);
      & > p {
        color: var(--text-black);
      }
    }
    & > p {
      color: var(--text-gray);
    }
  }

  .button-background-black {
    background-color: var(--background-pastel-black);
    border: 1px solid var(--pastel-black);
    &:hover {
      background-color: var(--background-black);
    }
    & > p {
      color: var(--text-white);
    }
  }

  .button-background-small {
    width: 80px;
    height: 12px;
    border-radius: 2px;
    & > p {
      font-size: var(--body-small-font);
    }
  }

  .button-background-large {
    width: 140px;
    height: 36px;
    border-radius: 4px;
    & > p {
      font-size: var(--body-middle-font);
      font-weight: bold;
    }
  }
`;
