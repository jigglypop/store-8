import styled from 'styled-components';

export const ProductInfo = styled.div`
  height: 440px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  justify-content: space-between;

  h3 {
    width: fit-content;
    font-size: var(--body-subtitle-font);
    font-weight: bold;
    margin-bottom: 32px;
  }
  .product__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--text-pastel-black);

    & > div {
      display: flex;
      align-items: center;
    }

    .producto-info__amount {
      .price {
        font-size: var(--body-huge-font);
        font-weight: bold;
      }
    }

    .producto-info__delivery-info {
      .delivery-info-fee {
        margin-bottom: 8px;
      }
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
      .count-btn {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }

  .product__total-info {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    border-top: 1px solid var(--gray4);
    .total-price {
      font-size: var(--body-subtitle-font);
      font-weight: bold;
      color: var(--text-black);
    }
  }
  .stroke {
    text-decoration: line-through;
  }
`;

export const InfoTitle = styled.div`
  width: 150px;
  color: var(--text-gray);
`;
