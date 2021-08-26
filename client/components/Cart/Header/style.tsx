import styled from '@lib/styledComponent';

export const CartHeader = styled.div`
  .cart-header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--line-gray);

    @media only screen and (min-width: 0px) {
      padding: 30px 15px 20px 15px;
    }
    @media only screen and (min-width: 375px) {
      padding: 30px 15px 20px 15px;
    }
    @media only screen and (min-width: 768px) {
      padding: 50px 5px 30px 5px;
    }
    @media only screen and (min-width: 1300px) {
      padding: 50px 5px 30px 5px;
    }
  }
  .cart-header-title {
    color: var(--text-black-dark);
    font-weight: bold;

    @media only screen and (min-width: 0px) {
      font-size: var(--head-small-font);
    }
    @media only screen and (min-width: 375px) {
      font-size: var(--head-small-font);
    }
    @media only screen and (min-width: 768px) {
      font-size: var(--head-small-font);
    }
    @media only screen and (min-width: 1300px) {
      font-size: var(--head-small-font);
    }
  }
  .cart-progress-container {
    flex-direction: row;
    align-items: center;
    @media only screen and (min-width: 0px) {
      display: none;
    }
    @media only screen and (min-width: 375px) {
      display: none;
    }
    @media only screen and (min-width: 768px) {
      display: flex;
    }
    @media only screen and (min-width: 1300px) {
      display: flex;
    }
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
