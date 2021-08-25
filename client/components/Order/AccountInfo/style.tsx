import styled from '@lib/styledComponent';

export const AccountInfo = styled.div`
  margin-top: 36px;
  .account-header {
    padding: 11px;
    border-bottom: 2px solid var(--line-gray2);
    & > p {
      color: var(--text-black-dark);
      font-size: var(--body-large-font);
      font-weight: 600;
    }
  }
  .section-header {
    font-weight: 600;
    color: var(--text-black-dark);
  }
  .mileage-section {
    padding: 12px;
    height: 74px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--line-gray);
    .mileage-amount {
      font-weight: 700;
      color: var(--text-blue-dark);
    }
  }
  .coupon-section {
    padding: 27px 12px;
    width: 100%;
    border-bottom: 1px solid var(--line-gray);
    .section-infor {
      font-size: var(--body-small-font);
      color: var(--text-lightgray);
      margin-top: 5px;
      margin-bottom: 18px;
    }
    .coupon-button-section {
      margin-top: 18px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    button {
      font-size: var(--body-small-font);
      width: 100px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      color: var(--text-black-dark);
    }
    .submit-coupon {
      border: 1px solid var(--text-gray-dark);
      color: var(--text-black-dark);
      margin-right: 10px;
    }
    .submit-coupon:hover {
      background-color: var(--background-button-select);
    }
    .remove-coupon {
      background-color: var(--background-red);
      color: var(--text-white);
    }
    .remove-coupon:hover {
      background-color: var(--background-dark-red);
    }
  }
  .use-mileage-section {
    padding: 12px;
    height: 120px;
    margin-top: 12px;
    margin-bottom: 240px;
    width: calc(100% - 24px);

    .mileage-usage-title-section {
      display: flex;
      flex-direction: row;
      margin-top: 16px;
      margin-bottom: 8px;

      .usable-mileage-title {
        font-size: var(--body-small-font);
        color: var(--text-black-dark);
      }

      .mileage-amount {
        margin-left: 8px;
        font-weight: 700;
        font-size: var(--body-small-font);
        color: var(--text-blue-dark);
      }
    }
    .mileage-input-container {
      display: flex;
      flex-direction: row;
      img {
        width: 12px;
        height: 12px;
        margin-right: 12px;
        margin-top: 10px;
      }
      p {
        margin-top: 11px;
        font-size: var(--body-small-font);
        color: var(--text-black-dark);
      }
      input {
        @media only screen and (min-width: 375px) {
          width: 160px;
        }
        @media only screen and (min-width: 768px) {
          width: 240px;
        }
        @media only screen and (min-width: 1300px) {
          width: 320px;
        }
        height: 32px;
        padding: 6px;
        display: flex;
        align-items: center;
        border: 1px solid var(--line-gray);
        border-radius: 4px;
        margin-right: 12px;
        color: var(--text-black-dark);
      }
      input:focus {
        border: 1px solid var(--line-mint);
      }
    }
  }
`;
