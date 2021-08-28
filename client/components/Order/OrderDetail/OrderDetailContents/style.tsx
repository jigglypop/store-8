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
      color: var(--text-black-dark);
    }

    .contents-detail-subtitle {
      margin-top: 3px;
      font-size: var(--body-middle-font);
      color: var(--text-gray-dark);
    }
  }

  .contents-detail-row {
    margin-top: 8px;
    display: flex;
    @media only screen and (min-width: 0px) {
      flex-direction: column;
    }
    @media only screen and (min-width: 375px) {
      flex-direction: column;
    }
    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
    @media only screen and (min-width: 1300px) {
      flex-direction: row;
    }

    .contents-detail-amount {
      margin-right: 3px;
      color: var(--text-black-dark);
    }
    .contents-detail-count {
      margin-top: 3px;
      font-size: var(--body-small-font);
      color: var(--text-black-dark);
    }
  }

  .contents-detail-mileage {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    .contents-detail-mileage-title {
      font-weight: 700;
      font-size: var(--body-small-font);
      color: var(--text-blue-dark);
      margin-right: 3px;
    }
    .contents-detail-mileage-amount {
      font-size: var(--body-small-font);
      color: var(--text-black-dark);
    }
  }
`;
