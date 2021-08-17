import styled from 'styled-components';

export const QuestionDetail = styled.div`
  background-color: var(--background-gray);

  & > div {
    display: flex;
    padding: 5px 0;

    .question-detail__title,
    .question-detail__content {
      padding: 18px 13px;
    }

    .question-detail__content {
      padding-left: 10px;
    }

    .question-detail__title {
      width: 60px;
    }
  }
`;
