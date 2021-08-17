import styled from 'styled-components';

export const QuestionForm = styled.div`
  padding: 30px;
  background-color: var(--background-white);
  color: var(--text-gray);
  min-width: 720px;
  border-radius: 8px;
  & > div,
  form > div {
    display: flex;
    padding: 16px 0;
  }

  .question-form__header {
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--line-gray);
    h2 {
      color: var(--text-black);
      font-size: var(--body-subtitle-font);
    }
    .cancel-btn {
      cursor: pointer;
    }
  }

  .question-form__title {
    align-items: center;
    border-bottom: 1px solid var(--line-gray);
    img {
      width: 72px;
      height: 72px;
      margin-right: 28px;
    }
    .title {
      color: var(--text-black);
      font-weight: bold;
    }
  }

  .question-form__content-input {
    border-bottom: 1px solid var(--line-gray);
  }

  .question-form__title-input,
  .question-form__content-input {
    font-size: var(--body-middle-font);

    .textarea-wrapper {
      width: 100%;
    }

    .title {
      padding-top: 12px;
      color: var(--text-black);
      width: 100px;
    }

    .question-form__input {
      width: 100%;
      border: 1px solid var(--gray5);
      border-radius: 4px;
      padding: 10px 15px;
    }

    textarea {
      height: 200px;
      resize: none;
    }

    .question-form__input:focus {
      outline: none;
      border: 1px solid var(--gray2);
    }

    .question-form__input {
    }
  }

  .question-form__secret {
    padding: 16px 0;
    display: flex;
    align-items: center;
    .checkbox-secret {
      margin-right: 16px;
    }
  }

  .question-form__btns {
    display: flex;
    justify-content: center;
    button {
      width: 160px;
      height: 56px;
      border-radius: 6px;
    }
    .cancel-btn {
      border: 1px solid var(--line-gray);
      margin-right: 16px;
    }
    .submit-btn {
      color: var(--text-white);
      background-color: var(--background-pastel-black);
    }
    .submit-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;
