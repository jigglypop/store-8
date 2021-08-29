import styled from 'styled-components';

export const QuestionItem = styled.li`
  cursor: pointer;
  background-color: var(--body-background-dark);
  color: var(--text-black-dark);

  & > div,
  .question-info {
    display: flex;
    align-items: center;
  }

  .question-info.no {
    width: 60px;
    margin-right: 20px;
  }

  .question-info.title {
    & > svg {
      fill: var(--text-pastel-black-dark);
      margin-right: 8px;
    }
  }

  .question-info.user-id,
  .question-info.date,
  .question-info.status {
    width: 120px;
    justify-content: center;
  }

  @media only screen and (max-width: 1300px) {
    .question-info.user-id,
    .question-info.date,
    .question-info.status {
      width: 70px;
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: var(--body-small-font);

    .question-info.no {
      width: 20px;
    }
    .question-info.user-id,
    .question-info.date,
    .question-info.status {
      width: 60px;
    }
  }
  @media only screen and (max-width: 375px) {
    font-size: var(--body-tiny-font);

    .question-info.user-id {
      display: none;
    }
    .question-info.date,
    .question-info.status {
      width: 60px;
    }
  }
`;
