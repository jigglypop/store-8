import styled from '@lib/styledComponent';

export const EditProfileModal = styled.div`
  min-height: 250px;
  width: 400px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white);

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  form {
    display: flex;
    align-items: flex-end;
    overflow-x: scroll;
    width: 100%;
    height: 90px;

    /* color: var(--text-black-dark); */
    color: var(--text-dark-gray-dark);

    &::-webkit-scrollbar {
      display: none;
    }
    input {
      display: none;
    }

    .img-form__plus-icon {
      stroke: var(--line-gray);
      margin-top: 4px;
      margin-bottom: 8px;
    }

    .img-form__add-btn {
      cursor: pointer;
      min-width: 76px;
      height: 76px;
      /* background-color: var(--body-background-dark); */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      border: 1px solid var(--line-gray);
      border-radius: 8px;
      .form-img-count {
        font-size: 12px;
        color: var(--gray1);
        margin-top: 7px;
      }
    }
  }
`;
