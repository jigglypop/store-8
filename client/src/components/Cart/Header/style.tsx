import styled from 'styled-components';

export const CartHeader = styled.div`
  .cart-header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px 5px 30px 5px;
    border-bottom: 1px solid var(--cartGrey);
  }
  .cart-progress-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cart-progress-container > p {
    font-size: 14px;
    font-weight: bold;
  }
  .cart-progress-container > img {
    height: 10px;
    width: 10px;
    margin: 0px 16px 0px 12px;
  }
  .cart-progress {
    color: var(--realBlack);
  }
  .cart-wait {
    color: var(--cartGrey);
  }
`;
