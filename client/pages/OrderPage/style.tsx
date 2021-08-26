import styled from '@lib/styledComponent';

export const OrderPage = styled.div`
  width: var(--app-width);
  margin: 0px calc(50vw - var(--app-width) / 2) 0px calc(50vw - var(--app-width) / 2);
  position: relative;

  .cart-side-container {
    width: 100%;
    min-height: 800px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .left {
    flex-grow: 1;
  }

  .cart-receipt-side-container {
    @media only screen and (min-width: 375px) {
      width: 160px;
      margin-left: 20px;
    }
    @media only screen and (min-width: 768px) {
      width: 240px;
      margin-left: 40px;
    }
    @media only screen and (min-width: 1300px) {
      width: 320px;
      margin-left: 70px;
    }
    height: 303px;
    margin-top: 47px;
    margin-bottom: 50px;

    position: sticky;
    top: 100px;
  }
`;
