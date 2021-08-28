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
    display: flex;
    flex-direction: row;
    margin-top: 8px;

    .contents-detail-amount {
      margin-right: 3px;
      color: var(--text-black-dark);
      @media only screen and (min-width: 0px) {
        font-size: var(--body-middle-font);
      }
      @media only screen and (min-width: 375px) {
        font-size: var(--body-middle-font);
      }
      @media only screen and (min-width: 768px) {
        font-size: 1rem;
      }
      @media only screen and (min-width: 1300px) {
        font-size: 1rem;
      }
    }
    .contents-detail-count {
      margin-top: 3px;
      font-size: var(--body-small-font);
      color: var(--text-black-dark);
    }
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
