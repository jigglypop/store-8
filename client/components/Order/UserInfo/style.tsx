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
      font-weight: 600;
    }
    & > button {
      width: 180px;
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

  .input-form-container {
    padding-top: 25px;
    padding-bottom: 12px;
  }

  .input-form-label {
    font-weight: 600;
  }

  .address-form-container {
    display: flex;
    flex-direction: column;
    margin-top: 12px;

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
  }
`;
