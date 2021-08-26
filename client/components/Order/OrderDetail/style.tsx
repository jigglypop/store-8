import styled from '@lib/styledComponent';

export const OrderDetail = styled.div`
  margin-top: 20px;

  .order-detail-title {
    padding-bottom: 11px;
    padding-left: 11px;
    border-bottom: 2px solid var(--line-gray2);
    & > p {
      font-size: var(--body-large-font);
      color: var(--text-black-dark);
      font-weight: 600;
    }
  }
  .order-detail-contents-container {
  }
`;
