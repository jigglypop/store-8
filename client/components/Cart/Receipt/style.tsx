import styled from '@lib/styledComponent';

export const ReceiptContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Receipt = styled.div`
  padding: 19px;
  width: 100%;
  border-radius: 8px;
  background-color: var(--background-section-dark);
  margin-bottom: 11px;

  .amount-title {
    color: var(--text-black-dark);
    font-size: var(--body-large-font);
    font-weight: bold;
  }

  .amount-row {
    width: 100%;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--text-black-dark);

    & > .amount {
      color: var(--text-black-dark);
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
  background-color: var(--background-section-dark);

  & > p {
    color: var(--text-black-dark);
    font-weight: bold;
  }
  & > .amount {
    margin-top: 12px;
    color: var(--text-black-dark);
    font-size: var(--body-large-font);
  }
`;

export const OrderNow = styled.div`
  button {
    color: var(--text-white);
    width: 100%;
    height: 48px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px 0px 8px 0px;
    transition: all 0.3s;

    background-color: var(--background-mint);
    &:hover {
      background-color: var(--background-dark-mint);
    }
  }

  .disabled-button {
    background-color: var(--border-dark-gray);
    cursor: default;
    &:hover {
      background-color: var(--border-dark-gray);
    }
  }

  .order-info {
    display: flex;
    flex-direction: row;

    & > p {
      margin-top: 1px;
      width: calc(100% - 14px);
      font-size: var(--body-small-font);
      color: var(--text-black-dark);
    }
  }

  .ex-mark-icon {
    margin-right: 6px;
    .exMark_svg__outline {
      stroke: var(--text-pastel-black-dark);
    }
    .exMark_svg__innerMark {
      fill: var(--text-pastel-black-dark);
    }
  }
`;
