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
  .input-form {
    display: flex;
    flex-direction: row;

    & > input {
      display: flex;
      align-items: center;
      width: 350px;
      height: 32px;
      margin: 6px 12px 6px 0px;
      border-radius: 4px;
      padding: 5px;
      font-size: var(--body-middle-font);
      color: var(--text-black);
      border: 1px solid var(--line-black);
    }
    .plain-input:focus {
      border: 1px solid var(--line-mint);
    }
    .input-form-alert:focus {
      border: 1px solid var(--line-red);
    }
    & > input::placeholder {
      font-size: var(--body-middle-font);
    }
    & > img {
      width: 16px;
      object-fit: contain;
    }
    .alert-input {
      border: 1px solid var(--line-red);
    }
  }
  .alert-placeholder {
    height: 14px;
  }
  .input-form-alert {
    display: flex;
    flex-direction: row;
    margin-left: 4px;

    & > img {
      width: 14px;
      height: 14px;
      margin-right: 7px;
    }
    & > p {
      margin-top: 2px;
      font-size: var(--body-small-font);
      color: var(--text-red);
    }
  }
`;
