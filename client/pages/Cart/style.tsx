import styled from 'styled-components';

export const Cart = styled.div`
  width: var(--app-width);
  margin: 0px calc(50vw - var(--app-width) / 2) 30px calc(50vw - var(--app-width) / 2);
  position: relative;

  .cart-side-container {
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: center;
  }

  .cart-receipt-side-container {
    width: 320px;
    margin-top: 20px;
    margin-bottom: -20px;
    margin-left: 70px;
    height: 290px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 60px;
    bottom: 13px;
  }
`;
