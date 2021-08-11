import styled from 'styled-components';

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  .product__info {
    & > div {
      display: flex;
    }

    .producto-info__count {
      & > form {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100px;
        height: 30px;
        border: 1px solid #dddfe1;
        border-radius: 3px;
      }
      input {
        text-align: center;
        padding: 10px;
        width: 30px;
      }
      button {
        text-align: center;
        padding: 8px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }

  .product__total-info {
    display: flex;
  }
`;

export const InfoTitle = styled.div`
  width: 150px;
  color: #bbbbbb;
`;
