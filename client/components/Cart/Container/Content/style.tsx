import styled from 'styled-components';

export const CartContent = styled.tr`
  width: 100%;
  height: 4.75rem;
  padding: 0px;
  --tableTopBottomMargin: 6px;
  --tableSideMargin: 8px;

  td {
    border-top: 0.5px solid var(--line-gray);
  }

  .cart-content-info-container {
    flex-direction: row;
    padding: 0.75rem 0rem;
  }

  .cart-content-info-container > img {
    width: 3rem;
    height: 4rem;
    border: 1px solid var(--line-gray);
    margin-right: var(--tableSideMargin);
    @media only screen and (min-width: 375px) {
      margin-right: 1rem;
    }
    @media only screen and (min-width: 768px) {
      margin-right: 1rem;
    }
    @media only screen and (min-width: 1300px) {
      margin-right: 0.5rem;
    }
  }

  .cart-content-text-main {
    flex-direction: column;
  }

  .cart-content-title {
    font-weight: bold;
    font-size: var(--body-small-font);
  }

  .cart-coupon-badge {
    background-color: var(--background-black);
    width: 3rem;
    height: 1.125rem;
    border-radius: 2px;
    font-size: var(--body-tiny-font);
    color: var(--text-white);
    margin-bottom: var(--tableTopBottomMargin);
  }

  .cart-option-block {
    margin-top: var(--tableTopBottomMargin);
    font-size: var(--body-tiny-font);
    color: var(--text-gray);
  }

  .cart-count-container {
    flex-direction: column;
  }

  .cart-count-container > p {
    font-weight: bold;
    font-size: var(--body-small-font);
    margin-bottom: var(--tableTopBottomMargin);
  }

  .cart-count-container > button {
    padding: 4px 12px;
    background-color: var(--background-gray);
    border: 1px solid var(--line-gray);
    border-radius: 3px;
  }

  .cart-count-container > button > p {
    color: var(--text-black);
    font-size: var(--body-tiny-font);
  }

  .cart-amount-container > p {
    font-weight: bold;
    font-size: var(--body-middle-font);
  }

  .cart-ship-container {
    flex-direction: column;
  }

  .cart-ship-container > p {
    color: var(--text-gray);
    font-size: var(--body-middle-font);
    margin-bottom: var(--tableTopBottomMargin);
  }
`;
