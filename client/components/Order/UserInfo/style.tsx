import styled from '@lib/styledComponent';

// 푸터 부분
export const UserInfo = styled.div`
  padding-left: 12px;
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
      height: 36px;
      padding: 6px;
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
        height: 36px;
        margin-left: 12px;
        padding: 6px;
        border: 1px solid var(--line-black);
        border-radius: 4px;
        &:hover {
          background-color: var(--background-gray);
        }
      }
    }
    & input {
      margin-top: 8px;
      margin-bottom: 8px;
      border: 1px solid var(--line-black);
      border-radius: 4px;
    }
  }
`;
