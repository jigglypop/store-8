import styled from '@lib/styledComponent';

export const Receipt = styled.div`
  .cart-receipt-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    border: 1.5px solid var(--line-gray);
    border-radius: 4px;
    margin-top: 2.5rem;
    padding: 2.5rem;
  }

  .cart-receipt-container > img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .cart-price-layout {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 0.5rem;
  }

  .cart-receipt-title-layout {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .cart-select-amount-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .cart-title-text-black-large {
    font-weight: bold;
    margin: 0px 2px;
  }

  .cart-price-text-black-large {
    font-weight: bold;
    font-size: var(--body-large-font);
    color: var(--realBlack);
  }

  .cart-price-text-mint-large {
    font-weight: bold;
    font-size: var(--body-large-font);
    color: var(--text-mint);
  }

  .cart-price-text-unit {
    line-height: var(--body-large-font);
    margin-top: 1px;
    margin-left: 1px;
  }
`;
