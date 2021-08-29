import styled from '@lib/styledComponent';

export const Captcha = styled.div`
  width: 250px;
  .canvas-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > canvas {
      border-radius: 3px;
    }

    & > button {
      margin-left: 8px;
      width: 34px;
      height: 34px;
      border-radius: 3px;
      border: 1px solid var(--line-black-dark);

      .button-svg {
        transition: all 1s;
        & > path {
          stroke: var(--line-black-dark);
        }
      }
    }

    & > button:hover {
      .button-svg {
        transform-origin: center;
        transform: rotate(360deg);
      }
    }
  }
  .captcha-input {
    width: 100%;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > input {
      width: 100%;
      margin-right: 12px;
      margin-bottom: 8px;
      padding: 4px;
      border-radius: 4px;
      border: 1px solid var(--line-black-dark);
      color: var(--line-black-dark);
    }
    .alert-text {
      height: var(--body-small-font);
      color: var(--text-red);
      font-size: var(--body-small-font);
    }
    .success-text {
      height: var(--body-small-font);
      color: var(--text-mint);
      font-size: var(--body-small-font);
    }
  }
`;
