import styled from '@lib/styledComponent';

export const OrderReceipt = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Receipt = styled.div`
  padding: 19px;
  width: 100%;
  border-radius: 8px;
  background-color: var(--background-gray);
  margin-bottom: 11px;

  .amount-title {
    font-size: var(--body-large-font);
    font-weight: bold;
  }

  .amount-row {
    width: 100%;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > .amount {
      font-weight: bold;
    }
  }
`;

export const TotalPrice = styled.div`
  padding: 13px 15px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-gray);

  & > p {
    font-weight: bold;
  }
  & > .amount {
    margin-top: 12px;
    font-size: var(--body-large-font);
  }
`;

export const OrderNow = styled.div`
  button {
    background-color: var(--background-mint);
    color: var(--text-white);
    width: 100%;
    height: 48px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px 0px 8px 0px;
    &:hover {
      background-color: var(--background-dark-mint);
    }
  }
  .order-info {
    margin-top: 11px;
    display: flex;
    flex-direction: row;

    & > img {
      width: var(--body-small-font);
      height: var(--body-small-font);
    }

    & > p {
      margin-top: 1px;
      margin-left: 6px;
      font-size: var(--body-small-font);
    }
  }
`;
