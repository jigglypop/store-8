import styled from 'styled-components';

export const ReviewForm = styled.div`
  padding: 30px;
  max-width: 660px;
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

  .review-form__header {
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--line-gray);
    stroke: var(--line-gray-dark);
    h2 {
      color: var(--text-black-dark);
      font-size: var(--body-subtitle-font);
    }
    .cancel-btn {
      cursor: pointer;
    }
  }

  .review-form__title {
    align-items: center;
    border-bottom: 1px solid var(--line-gray);
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

  .review-form__title-input,
  .review-form__contents-input,
  .review-form__image-input {
    font-size: var(--body-middle-font);

    .textarea-wrapper {
      width: 100%;
    }

    .title {
      padding-top: 12px;
      color: var(--text-black-dark);
      width: 100px;
    }

    .review-form__input {
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

    .review-form__input:focus {
      outline: none;
      border: 1px solid var(--line-dark-gray-dark);
    }
  }

  .review-form__error {
    height: 15px;
    color: var(--text-red);
    padding-left: 100px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--line-gray);
    padding-top: 0;
  }

  .review-form__btns {
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
