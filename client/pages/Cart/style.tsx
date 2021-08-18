import styled from 'styled-components';

export const Cart = styled.div`
  width: var(--app-width);

  .cart-side-container {
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-receipt-side-container {
    width: 320px;
    margin-left: 70px;
    min-height: 290px;
    border-radius: 7px;
    background-color: var(--background-gray);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
