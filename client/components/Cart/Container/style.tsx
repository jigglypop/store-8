import styled from '@lib/styledComponent';

export const CartContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .nothing-container {
    justify-content: center;
    margin-top: 240px;
  }

  .nothing-text {
    color: var(--text-black-dark);
    font-size: var(--body-title-font);
  }

  .selector-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13px;
    height: 56px;
    width: 100%;
    border-bottom: 0.5px solid var(--line-gray);

    & > img {
      width: 18px;
      height: 18px;
      margin-right: 13px;
      cursor: pointer;
    }
    & > button {
      border: 1px solid var(--border-dark-gray);
      padding: 9px 13px;
      height: 30px;
      width: 100px;
      border-radius: 3px;
      font-size: var(--body-small-font);
      color: var(--line-gray-dark);
      background-color: var(--body-background-dark);

      &:hover {
        background-color: var(--background-button-select);
      }
    }
  }
`;
