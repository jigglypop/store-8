import styled from 'styled-components';

export const CartContent = styled.tr`
  width: calc(100% - 70px);
  height: 72px;
  padding: 0px;
  td {
    border-top: 0.5px solid var(--cartGrey);
  }

  .cart-content-info-container {
    flex-direction: row;
    padding: 12px 0px;
  }

  .cart-content-info-container > img {
    width: 48px;
    height: 54px;
    border: 1px solid var(--cartGrey);
    margin-right: 8px;
  }

  .cart-content-text-main {
    flex-direction: column;
  }

  .cart-content-title {
    font-weight: bold;
    font-size: 12px;
  }

  .cart-coupon-badge {
    background-color: var(--realBlack);
    width: 48px;
    height: 18px;
    font-size: 10px;
    color: var(--realWhite);
    margin-bottom: 6px;
  }

  .cart-option-block {
    margin-top: 6px;
    font-size: 10px;
    color: var(--textGrey);
  }

  .cart-count-container {
    flex-direction: column;
  }

  .cart-count-container > p {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 6px;
  }

  .cart-count-container > button {
    padding: 4px 12px;
    appearance: none;
    background-color: var(--backgroundGrey);
    border: none;
    border: 1px solid var(--cartGrey);
    border-radius: 3px;
  }

  .cart-count-container > button > p {
    color: var(--pastelBlack);
    font-size: 10px;
  }

  .cart-amount-container > p {
    font-weight: bold;
    font-size: 14px;
  }

  .cart-ship-container {
    flex-direction: column;
  }

  .cart-ship-container > p {
    color: var(--textGrey);
    font-size: 14px;
    margin-bottom: 6px;
  }
`;
