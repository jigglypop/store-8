import styled from '@lib/styledComponent';

export const CouponModal = styled.div`
  min-height: 350px;
  border-radius: 20px;
  background-color: var(--background-select-section-dark);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 0px) {
    width: 300px;
    padding: 20px;
  }
  @media only screen and (min-width: 375px) {
    width: 450px;
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
    width: 650px;
    padding: 40px;
  }
  @media only screen and (min-width: 1300px) {
    width: 650px;
    padding: 40px;
  }

  .coupon-modal-title {
    color: var(--text-black-dark);

    @media only screen and (min-width: 0px) {
      font-size: var(--body-large-font);
      margin-bottom: 18px;
    }
    @media only screen and (min-width: 375px) {
      font-size: var(--body-large-font);
      margin-bottom: 18px;
    }
    @media only screen and (min-width: 768px) {
      font-size: var(--body-huge-font);
      margin-bottom: 28px;
    }
    @media only screen and (min-width: 1300px) {
      font-size: var(--body-huge-font);
      margin-bottom: 28px;
    }
  }

  .coupon-container {
    max-height: 240px;
    overflow: auto;
  }
  .coupon-div {
    margin: 5px 0px;
  }

  .button-space {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > button {
      @media only screen and (min-width: 0px) {
        width: 80px;
        height: 24px;
        border-radius: 3px;
      }
      @media only screen and (min-width: 375px) {
        width: 80px;
        height: 24px;
        border-radius: 3px;
      }
      @media only screen and (min-width: 768px) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
      @media only screen and (min-width: 1300px) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
    }

    .cancle-btn {
      color: var(--text-black-dark);
      border: 1px solid var(--line-black-dark);
      &:hover {
        background-color: var(--background-section-dark);
      }
    }

    .non-submit-btn {
      background-color: var(--border-dark-gray);
      cursor: default;
      color: white;
      &:hover {
        background-color: var(--border-dark-gray);
      }
    }

    .submit-btn {
      background-color: var(--background-mint);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-mint);
      }
    }
  }
`;
