import styled from '@client/lib/styledComponent';

export const LoginNeedModal = styled.div`
  min-height: 300px;
  width: 450px;
  padding: 40px;
  background-color: var(--background-select-section-dark);
  color: var(--text-black-dark);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);

  .login-modal-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    flex: 1;
    font-size: var(--body-huge-font);
  }

  .login-modal__btns {
    display: flex;
    justify-content: space-between;
    & button {
      width: 120px;
      height: 36px;
      border-radius: 4px;
      color: var(--text-black-dark);
    }
    .cancle-btn {
      border: 1px solid var(--background-black-dark);
      background-color: var(--background-white-dark);
      &:hover {
        background-color: var(--background-section-dark);
        color: var(--text-black-dark);
      }
    }
    .delete-btn {
      background-color: var(--background-red);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-red);
      }
    }
  }
`;
