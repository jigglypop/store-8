import styled from '@lib/styledComponent';

export const OrderPage = styled.div`
  width: var(--app-width);
  margin: 0px calc(50vw - var(--app-width) / 2) 0px calc(50vw - var(--app-width) / 2);
  position: relative;

  .cart-side-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .cart-side-container {
    @media only screen and (min-width: 0px) {
      flex-direction: column;
    }
    @media only screen and (min-width: 375px) {
      flex-direction: column;
    }
    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
    @media only screen and (min-width: 1300px) {
      flex-direction: row;
    }
  }

  .left {
    @media only screen and (min-width: 0px) {
      width: calc(100% - 50px);
      margin: 0px 20px 0px 20px;
    }
    @media only screen and (min-width: 375px) {
      width: calc(100% - 50px);
      margin: 0px 20px 0px 20px;
    }
    @media only screen and (min-width: 768px) {
      width: calc(100% - 360px);
    }
    @media only screen and (min-width: 1300px) {
      width: calc(100% - 390px);
    }
  }

  .cart-receipt-side-container {
    @media only screen and (min-width: 0px) {
      width: calc(100% - 50px);
      margin: 0px 20px 30px 20px;
    }
    @media only screen and (min-width: 375px) {
      width: calc(100% - 50px);
      margin: 0px 20px 30px 20px;
    }
    @media only screen and (min-width: 768px) {
      width: 320px;
      margin-left: 47px 0px 50px 70px;
      position: sticky;
      top: 100px;
    }
    @media only screen and (min-width: 1300px) {
      width: 320px;
      margin-left: 47px 0px 50px 70px;
      position: sticky;
      top: 100px;
    }
    height: 303px;
  }
`;
