import styled from '@lib/styledComponent';

export const CartContainer = styled.div`
  width: 100%;
  min-height: 600px;

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
      color: var(--text-gray);
      background-color: var(--background-white);

      &:hover {
        background-color: var(--background-gray);
        color: var(--text-dark-gray);
      }
    }
  }
`;
