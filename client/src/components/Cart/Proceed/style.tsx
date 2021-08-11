import styled from 'styled-components';

export const Proceed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;

  .cart-proceed-button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .cart-proceed-button-side-layout {
    display: flex;
    flex-direction: row;
  }

  .cart-proceed-button-side-layout > div:first-child {
    margin-right: 10px;
  }

  .cart-proceed-guide-container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .cart-proceed-guide-container > img {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }

  .cart-proceed-guide-container > p {
    font-size: 12px;
    line-height: 14px;
  }
`;
