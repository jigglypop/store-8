import styled from '@lib/styledComponent';

// 푸터 부분
export const UserInfo = styled.div`
  margin-top: 60px;
  padding-left: 12px;

  .user-info-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -12px;
    padding: 0px 11px 11px 11px;
    border-bottom: 2px solid var(--line-gray2);
    & > p {
      font-size: var(--body-large-font);
      color: var(--text-black-dark);
      font-weight: 600;
    }
    & > button {
      height: 32px;
      border-radius: 3px;
      background-color: var(--background-mint);
      font-weight: 400;
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-mint);
      }
    }
  }

  .user-info-title > button {
    @media only screen and (min-width: 0px) {
      width: 100px;
      font-size: var(--body-middle-font);
    }
    @media only screen and (min-width: 375px) {
      width: 100px;
      font-size: var(--body-middle-font);
    }
    @media only screen and (min-width: 768px) {
      width: 180px;
      font-size: 1rem;
    }
    @media only screen and (min-width: 1300px) {
      width: 180px;
      font-size: 1rem;
    }
  }

  .input-form-container {
    padding-top: 25px;
    padding-bottom: 12px;
  }

  .input-form-label {
    font-weight: 600;
    color: var(--text-black-dark);
  }

  .address-form-container {
    display: flex;
    flex-direction: column;
    margin-top: 12px;

    input {
      height: 32px;
      padding: 6px;
      color: var(--text-black-dark);
      &::placeholder {
        font-size: var(--body-middle-font);
        color: var(--text-lightgray);
      }

      @media only screen and (min-width: 0px) {
        width: 180px;
      }
      @media only screen and (min-width: 375px) {
        width: 240px;
      }
      @media only screen and (min-width: 768px) {
        width: 300px;
      }
      @media only screen and (min-width: 1300px) {
        width: 360px;
      }
    }

    .address-search-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      input {
        width: 150px;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        margin-left: 12px;
        padding: 6px;
        border: 1px solid var(--line-black);
        border-radius: 4px;
        font-size: var(--body-small-font);
        color: var(--text-black-dark);
        &:hover {
          background-color: var(--background-button-select);
        }
      }
    }
    & input {
      margin-top: 8px;
      margin-bottom: 8px;
      border: 1px solid var(--line-gray);
      border-radius: 4px;
    }

    .detail-address-page {
      display: flex;
      @media only screen and (min-width: 0px) {
        flex-direction: column;
      }
      @media only screen and (min-width: 375px) {
        flex-direction: column;
      }
      @media only screen and (min-width: 768px) {
        flex-direction: column;
      }
      @media only screen and (min-width: 1300px) {
        flex-direction: row;
      }

      .set-base-section {
        @media only screen and (min-width: 0px) {
          margin-left: 0px;
        }
        @media only screen and (min-width: 375px) {
          margin-left: 0px;
        }
        @media only screen and (min-width: 768px) {
          margin-left: 0px;
        }
        @media only screen and (min-width: 1300px) {
          margin-left: 18px;
        }
      }
      .set-base-section {
        display: flex;
        flex-direction: row;

        img {
          width: 12px;
          object-fit: contain;
        }
        div {
          p {
            margin-top: 2px;
            font-size: var(--body-small-font);
            color: var(--text-black-dark);
          }
          margin-left: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
