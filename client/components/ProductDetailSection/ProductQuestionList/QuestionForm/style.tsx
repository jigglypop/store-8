import styled from 'styled-components';

export const QuestionForm = styled.div`
  padding: 30px;
  background-color: var(--background-select-section-dark);
  color: var(--text-gray-dark);
  min-width: 720px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);

  & > div,
  form > div {
    display: flex;
    padding: 16px 0;
  }

  .question-form__header {
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--line-gray-dark);
    stroke: var(--line-gray-dark);
    h2 {
      color: var(--text-black-dark);
      font-size: var(--body-subtitle-font);
    }
    .cancel-btn {
      cursor: pointer;
    }
  }

  .question-form__title {
    align-items: center;
    border-bottom: 1px solid var(--line-gray-dark);
    img {
      width: 72px;
      height: 72px;
      margin-right: 28px;
    }
    .title {
      color: var(--text-black-dark);
      font-weight: bold;
    }
  }

  .question-form__contents-input {
    border-bottom: 1px solid var(--line-gray-dark);
  }

  .question-form__title-input,
  .question-form__contents-input {
    font-size: var(--body-middle-font);
    caret-color: var(--text-black-dark);

    .textarea-wrapper {
      width: 100%;
    }

    .title {
      padding-top: 12px;
      color: var(--text-black-dark);
      width: 100px;
    }

    .question-form__input {
      width: 100%;
      border: 1px solid var(--gray5);
      border-radius: 4px;
      padding: 10px 15px;
    }
    input {
      color: var(--text-black-dark);
    }
    textarea {
      background-color: var(--background-select-section-dark);
      color: var(--text-black-dark);
      height: 200px;
      resize: none;
    }

    .question-form__input:focus {
      outline: none;
      border: 1px solid var(--line-dark-gray-dark);
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

  .question-form__error {
    height: 15px;
    color: var(--text-red);
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
      border: 1px solid var(--line-gray-dark);
      color: var(--text-pastel-black-dark);
      margin-right: 16px;
    }
    .submit-btn {
      border: 1px solid var(--line-gray-dark);
      color: var(--white);
      background-color: var(--background-pastel-black);
    }
    .submit-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;
