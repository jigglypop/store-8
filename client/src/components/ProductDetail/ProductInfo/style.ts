import styled from 'styled-components';

export const ProductInfo = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: var(--body-subtitle-font);
    font-weight: bold;
  }
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
        border: 1px solid var(--gray5);
        border-radius: 3px;
      }
      input {
        text-align: center;
        padding: 10px;
        width: 30px;
      }
      button {
        text-align: center;
        cursor: pointer;
      }
    }
  }

  .product__total-info {
    display: flex;
  }
`;

export const InfoTitle = styled.div`
  width: 150px;
  color: var(--text-gray);
`;
