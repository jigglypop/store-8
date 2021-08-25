import styled from '@lib/styledComponent';

export const OrderPlace = styled.div`
  margin-top: 60px;

  .order-detail-title {
    padding-bottom: 11px;
    padding-left: 11px;
    border-bottom: 2px solid var(--line-gray2);
    & > p {
      color: var(--text-black-dark);
      font-size: var(--body-large-font);
      font-weight: 600;
    }
  }

  .information-row {
    display: flex;
    flex-direction: row;
    margin-left: 24px;
    margin-top: 24px;

    .information-title {
      width: 130px;
      color: var(--text-black-dark);
      font-weight: 600;
    }
    .information-text {
      color: var(--text-black-dark);
      flex-grow: 1;
    }
  }
`;
