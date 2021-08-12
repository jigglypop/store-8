import styled from 'styled-components';

export const CartHeader = styled.div`
  .cart-header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px 5px 30px 5px;
    border-bottom: 1px solid var(--line-gray);
  }
  .cart-header-title {
    font-size: var(--head-small-font);
    font-weight: bold;
  }
  .cart-progress-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cart-progress-container > p {
    font-size: var(--body-middle-font);
    font-weight: bold;
  }
  .cart-progress-container > img {
    height: 10px;
    width: 10px;
    margin: 0rem 1rem 0rem 0.75rem;
  }
  .cart-progress {
    color: var(--text-black);
  }
  .cart-wait {
    color: var(--text-lightgray);
  }
`;
