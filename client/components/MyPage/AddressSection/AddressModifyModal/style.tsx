import styled from '@lib/styledComponent';

export const AddressModifyModal = styled.div`
  min-height: 350px;
  width: 650px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .address-modal-title {
    font-size: var(--body-huge-font);
    margin-bottom: 12px;
  }
  .address-container {
    max-height: 240px;
    overflow: auto;
  }

  .title-section {
    margin: 8px 0px 24px 0px;
    display: flex;
    flex-direction: column;
    p {
      font-weight: 600;
      margin-bottom: 8px;
    }
    input {
      width: 360px;
      height: 32px;
      border: 1px solid var(--line-gray);
      border-radius: 4px;
      padding: 6px;
      &::placeholder {
        font-size: var(--body-middle-font);
        color: var(--text-lightgray);
      }
    }
  }

  .button-space {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > button {
      width: 100px;
      height: 36px;
      border-radius: 4px;
    }

    .cancle-btn {
      border: 1px solid black;
      &:hover {
        background-color: var(--background-gray);
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

  .address-form-container {
    display: flex;
    flex-direction: column;

    .input-form-label {
      font-weight: 600;
    }

    input {
      width: 360px;
      height: 32px;
      padding: 6px;
      &::placeholder {
        font-size: var(--body-middle-font);
        color: var(--text-lightgray);
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
        &:hover {
          background-color: var(--background-gray);
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
      flex-direction: row;

      .set-base-section {
        margin-left: 18px;
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
