import styled from 'styled-components';

export const CartContent = styled.tr`
  width: calc(100% - 70px);
  height: 72px;
  padding: 0px;
  td {
    border-top: 0.5px solid var(--cartGrey);
  }
  td:last-child {
    border-right: 0.5px solid var(--cartGrey);
  }
  .vertical-center-align {
    display: flex;
    align-items: center;
  }
  .center-align {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-info {
    flex-direction: row;
    padding: 9px 0px;
  }

  .content-text-main {
    flex-direction: column;
  }

  .coupon-badge {
    background-color: var(--realBlack);
    width: 48px;
    height: 18px;
    font-size: 10px;
    color: var(--realWhite);
    margin-bottom: -6px;
  }

  .content-title {
    font-weight: bold;
    font-size: 12px;
  }

  .content-info > img {
    width: 46px;
    height: 62px;
    border: 1px solid var(--cartGrey);
    margin-right: 8px;
  }

  .count-container {
    flex-direction: column;
  }

  .count-container > p {
    font-weight: bold;
    font-size: 12px;
  }

  .count-container > button {
    width: 92px;
    height: 24px;
    padding: 6px;
    appearance: none;
    background-color: var(--backgroundGrey);
    border: none;
    border: 1px solid var(--cartGrey);
    border-radius: 3px;
  }

  .count-container > button > p {
    color: var(--pastelBlack);
    font-size: 12px;
  }

  .amount-container > p {
    font-weight: 800;
    font-size: 14px;
  }
`;
