import styled from 'styled-components';

export const ProductInfo = styled.div`
  min-height: 440px;
  display: flex;
  flex-direction: column;
  background-color: var(--body-background-dark);
  color: var(--text-black-dark);
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
    color: var(--text-pastel-black-dark);

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
    }
  }

  .product__total-info {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    margin-top: 30px;
    border-top: 1px solid var(--gray4);
    .total-price {
      font-weight: bold;
      font-size: var(--body-subtitle-font);
      color: var(--text-black-dark);
    }
  }
  .stroke {
    text-decoration: line-through;
  }
  @media only screen and (max-width: 1300px) {
    font-size: var(--body-middle-font);
    width: 348px;
    min-height: 240px;
    .product__info {
      h3 {
        font-size: var(--body-huge-font);
      }
      .producto-info__amount {
        .price {
          color: red;
          font-size: var(--body-large-font);
        }
      }
    }
    .product__total-info {
      .total-price {
        font-size: var(--body-huge-font);
      }
    }
  }
  @media only screen and (max-width: 375px) {
    font-size: var(--body-small-font);
  }
`;

export const InfoTitle = styled.div`
  width: 150px;
  color: var(--text-gray-dark);
  @media only screen and (max-width: 375px) {
  }
  @media only screen and (max-width: 768px) {
    width: 80px;
  }
  @media only screen and (max-width: 1300px) {
    width: 80px;
  }
`;

export const ProductInfoCount = styled.div`
  display: flex;
  align-items: center;
`;
