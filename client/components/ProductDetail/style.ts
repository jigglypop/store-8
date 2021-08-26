import styled from '@client/lib/styledComponent';

export const ProductDetail = styled.div`
  display: flex;
  background-color: var(--body-background-dark);
  color: var(--text-gray-dark);
  margin-bottom: 48px;
  .product-detail__info {
    margin-left: 80px;
    margin-top: 8px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (max-width: 1300px) {
    .product-detail__info {
      margin-left: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 375px) {
  }
`;
