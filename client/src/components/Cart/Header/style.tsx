import styled from 'styled-components';

export const CartHeader = styled.div`
  .header-container {
    width: calc(100% - 80px);
    display: flex;
    justify-content: space-between;
    padding: 40px;
  }
  .header-title {
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
  .progress {
    color: var(--realBlack);
  }
  .wait {
    color: var(--cartGrey);
  }
`;

export const ProgressText = styled.p`
  .progress {
    color: var(--realBlack);
  }
  .wait {
    color: var(--cartGrey);
  }
`;
