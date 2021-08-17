import styled from 'styled-components';

export const QuestionItem = styled.li`
  font-size: var(--body-small-font);

  & > div {
    display: flex;
    align-items: center;
  }

  .question-info {
    display: flex;
    align-items: center;
    padding: 18px 13px;
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
