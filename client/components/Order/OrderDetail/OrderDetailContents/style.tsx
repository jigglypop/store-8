import styled from '@lib/styledComponent';

export const OrderDetailContents = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--line-gray2);

  img {
    width: 100px;
    object-fit: contain;
    margin-right: 10px;
  }

  .contents-detail-container {
    display: flex;
    flex-direction: column;

    .contents-detail-title {
      margin-top: 8px;
      font-weight: 600;
    }

    .contents-detail-subtitle {
      margin-top: 3px;
      font-size: var(--body-middle-font);
      color: var(--text-gray);
    }
  }

  .contents-detail-row {
    display: flex;
    flex-direction: row;
    margin-top: 8px;

    .contents-detail-amount {
      margin-right: 3px;
    }
    .contents-detail-count {
      margin-top: 3px;
      font-size: var(--body-small-font);
    }
    .contents-detail-mileage-title {
      font-weight: 700;
      font-size: var(--body-small-font);
      color: var(--text-dark-blue);
      margin-right: 3px;
    }
    .contents-detail-mileage-amount {
      font-size: var(--body-small-font);
    }
  }
`;
