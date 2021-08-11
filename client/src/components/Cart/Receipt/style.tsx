import styled from 'styled-components';

export const Receipt = styled.div`
  .cart-receipt-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    width: 100%;
    border: 1.5px solid var(--cartGrey);
    border-radius: 4px;
    margin-top: 40px;
    padding: 40px;
  }

  .cart-receipt-container > img {
    width: 24px;
    height: 24px;
    margin-left: 32px;
    margin-right: 32px;
  }

  .cart-price-layout {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .cart-receipt-title-layout {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .cart-select-amount-title {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .cart-title-text-black-large {
    font-weight: bold;
    font-size: 16px;
    margin: 0px 2px;
  }

  .cart-price-text-black-large {
    font-weight: bold;
    font-size: 20px;
    color: var(--realBlack);
  }
  .cart-price-text-mint-large {
    font-weight: bold;
    font-size: 20px;
    color: var(--mint);
  }

  .cart-price-text-unit {
    line-height: 20px;
    font-size: 16px;
    margin-top: 2px;
    margin-left: 2px;
  }
`;
