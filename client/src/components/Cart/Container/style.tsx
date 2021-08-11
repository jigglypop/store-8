import styled from 'styled-components';

export const CartContainer = styled.table`
  width: 100%;
  margin-top: 60px;
  border-spacing: 0px;
  border-bottom: 0.5px solid var(--line-gray);
  border-top: 0.5px solid var(--line-black);

  .cart-container-header {
    width: 100%;
    height: 2.25rem;
    margin: 40px 0px 0px 0px;
    background-color: var(--background-gray);
  }
  .cart-container-header th {
    height: 2.25rem;
  }
  .cart-content-check-colgroup {
    width: 2.25rem;
  }
  .cart-content-info-colgroup {
    width: calc(67% - 36px);
  }
  .cart-content-count-colgroup {
    width: 11%;
  }
  .cart-content-amount-colgroup {
    width: 11%;
  }
  .cart-content-ship-colgroup {
    width: 11%;
  }
  .cart-content-title-text {
    font-weight: bold;
    color: var(--text-black);
    font-size: var(--body-small-font);
  }
  .cart-content-body > tr:first-child > td:last-child {
    border-left: 0.5px solid var(--line-gray);
  }
`;

export const CartGoToBack = styled.div`
  margin-top: 12px;
  .cart-keep-shopping {
    font-size: var(--body-small-font);
    color: var(--text-black);
    text-align: center;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--text-black);
    cursor: pointer;
  }
`;
