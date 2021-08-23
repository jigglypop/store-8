import styled from 'styled-components';

export const QuestionItem = styled.li`
  background-color: var(--footer-background-dark);
  color: var(--text-black-dark);
  font-size: var(--body-small-font);

  & > div,
  .question-info {
    display: flex;
    align-items: center;
  }

  .question-info.no {
    width: 60px;
  }

  .question-info.title {
    & > svg {
      fill: var(--gary6);
      margin-right: 8px;
    }
  }

  .question-info.user-id,
  .question-info.date,
  .question-info.status {
    width: 120px;
    justify-content: center;
  }
`;
