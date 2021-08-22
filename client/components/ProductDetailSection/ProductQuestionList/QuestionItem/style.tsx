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
`;
