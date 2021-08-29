import styled from '@lib/styledComponent';

export const EditProfileModal = styled.div`
  min-height: 440px;
  width: 500px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--body-background-dark);
  color: var(--text-black-dark);

  @media only screen and (max-width: 600px) {
    min-width: 300px;
    width: 90vw;
  }

  h2 {
    font-size: var(--body-title-font);
    font-weight: 600;
    font-family: 'Do Hyeon';

    @media only screen and (max-width: 600px) {
      font-size: var(--body-huge-font);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    width: 100%;
    height: 300px;
    color: var(--text-black-dark);
    h3 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: var(--body-large-font);

      @media only screen and (max-width: 600px) {
        font-size: var(--body-middle-font);
      }
    }

    label {
      width: 76px;
    }

    .container-input-img-src {
      display: flex;
      justify-content: flex-start;
    }

    &::-webkit-scrollbar {
      display: none;
    }
    input[type='file'] {
      display: none;
    }

    input[type='text'] {
      height: 30px;
      width: 100%;
      border: 1px solid var(--line-gray);
      border-radius: 7px;
      padding-left: 10px;
      color: var(--text-black-dark);
    }

    .text-error {
      height: 16px;
      color: #b96969;
      margin-top: 10px;
    }

    .text-error .img-form__plus-icon {
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
    }
  }

  .container-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      width: 50px;
    }

    button:hover {
      cursor: pointer;
      font-weight: 600;
    }

    .button-ok {
      color: #7878d1;
    }

    .button-cancel {
      color: #b96969;
    }
  }
`;
