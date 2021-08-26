import styled from '@lib/styledComponent';

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
    color: var(--text-black-dark);
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
  .cart-progress-container > svg {
    margin: 0rem 1rem 0rem 0.75rem;
  }
  .now-step {
    path {
      fill: var(--text-black-dark);
    }
  }
  .not-step {
    path {
      fill: var(--text-lightgray);
    }
  }
  .cart-progress {
    color: var(--text-black-dark);
  }
  .cart-wait {
    color: var(--text-lightgray);
  }
`;
