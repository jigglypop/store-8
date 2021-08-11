import styled from 'styled-components';

export const CartContainer = styled.table`
  width: calc(100% - 70px);
  border-spacing: 0px;
  border-collapse: separate;
  border-bottom: 0.5px solid var(--cartGrey);
  .cart-container-header {
    width: 100%;
    height: 36px;
    margin: 40px 0px 0px 0px;
    padding: 0px;
    background-color: var(--backgroundGrey);
    border-top: 0.5px solid var(--pastelBlack);
  }
  .cart-container-header th {
    height: 36px;
  }
  .cart-content-check-colgroup {
    width: 36px;
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
    color: var(--pastelBlack);
    font-size: 12px;
  }
  .cart-content-body > tr:first-child > td:last-child {
    border-left: 0.5px solid var(--cartGrey);
    border-right: 0.5px solid var(--cartGrey);
  }
`;

export const CartGoToBack = styled.div`
  margin-top: 12px;
  .cart-keep-shopping {
    font-size: 12px;
    color: var(--realBlack);
    line-height: 16px;
    text-align: center;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--realBlack);
    cursor: pointer;
  }
`;
