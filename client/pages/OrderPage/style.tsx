import styled from '@lib/styledComponent';

export const OrderPage = styled.div`
  width: var(--app-width);
  min-height: 600px;
  margin: 0px calc(50vw - var(--app-width) / 2) 30px calc(50vw - var(--app-width) / 2);
  position: relative;

  .cart-side-container {
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: center;
  }

  .left {
    flex-grow: 1;
  }

  .cart-receipt-side-container {
    width: 320px;
    height: 303px;
    margin-left: 70px;
    margin-top: 47px;

    position: sticky;
    top: 60px;
  }
`;
