import styled from '@lib/styledComponent';

export const AlertInput = styled.div`
  padding-top: 25px;
  padding-bottom: 12px;
  .dense-input {
    margin-bottom: -29px;
  }
  .input-form-label {
    font-weight: 600;
    color: var(--text-black-dark);
  }
  .input-form {
    display: flex;
    flex-direction: row;

    & > input {
      display: flex;
      align-items: center;
      width: 350px;
      height: 32px;
      margin: 12px 12px 6px 0px;
      border-radius: 4px;
      padding: 5px;
      font-size: var(--body-middle-font);
      color: var(--text-black-dark);
      border: 1px solid var(--line-gray);
    }
    .plain-input:focus {
      border: 1px solid var(--line-mint);
    }
    .input-form-alert:focus {
      border: 1px solid var(--line-red);
    }
    & > input::placeholder {
      font-size: var(--body-middle-font);
      color: var(--text-lightgray);
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
