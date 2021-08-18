import styled from '@lib/styledComponent';

export const CartContent = styled.div`
  width: 100%;
  height: 142px;
  padding: 10px 10px 10px 13px;
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid var(--line-gray);

  .unchecked-opacity {
    transition-duration: 0.5s;
    opacity: 0.2;
  }

  .check-button {
    width: 18px;
    height: 18px;
    margin-right: 13px;
    cursor: pointer;
  }

  .checked {
    transform: scale(1.04);
    transform-origin: center;
  }

  .product-info-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition-duration: 0.3s;

    .product-title {
      font-weight: bold;
    }
    .product-subtitle {
      margin-top: 6px;
      color: var(--text-lightgray);
      font-size: var(--body-middle-font);
      font-weight: 600;
    }
  }

  .product-image {
    height: 100%;
    object-fit: contain;
    margin-right: 13px;
    transition-duration: 0.3s;
  }

  .cart-detail-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .cart-amount-container {
  }

  .product-count-container {
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 22px;
    align-items: center;
    justify-content: space-between;

    & > p {
      margin-top: 3px;
      font-size: 22px;
      font-weight: bold;
    }
  }

  .num-scaler {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;
