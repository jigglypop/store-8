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
      font-size: var(--body-subtitle-font);
      font-weight: bold;
      color: var(--text-black-dark);
    }
  }
  .stroke {
    text-decoration: line-through;
  }
`;

export const InfoTitle = styled.div`
  width: 150px;
  color: var(--text-gray-dark);
`;

export const ProductInfoCount = styled.div`
  display: flex;
  align-items: center;
`;
