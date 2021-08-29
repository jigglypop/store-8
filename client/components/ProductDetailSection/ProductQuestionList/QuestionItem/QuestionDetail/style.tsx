import styled from 'styled-components';

export const QuestionDetail = styled.div`
  width: 100%;
  background-color: var(--footer-background-dark);
  color: var(--text-black-dark);
  font-size: var(--body-middle-font);
  padding: 0 13px;
  display: flex;
  flex-direction: row;

  .question-detail__question,
  .question-detail__answer {
    display: flex;
    padding: 5px 0;
    width: 100%;
    min-height: 50px;
  }

  .question-detail__content {
    padding: 20px;
    padding-right: 70px;
    padding-left: 0;
    letter-spacing: 1px;
    line-height: 1.5;
    flex: 1;
  }

  .question-detail__title {
    width: 60px;
    margin-right: 20px;
    padding-top: 25px;
  }

  .question-detail__date {
    margin-top: 20px;
    color: var(--text-gray);
  }

  .question-detail__btns {
    display: flex;
    align-items: flex-start;
    padding-top: 30px;
    padding-right: 30px;
    .question-detail__edit-btn {
      cursor: pointer;
      stroke: var(--text-black-dark);
    }
    .question-detail__delete-btn {
      cursor: pointer;
      stroke: var(--text-red);
      margin-left: 20px;
    }
  }
  @media only screen and (max-width: 1300px) {
  }
  @media only screen and (max-width: 768px) {
    .question-detail__title {
      width: 20px;
    }
    font-size: var(--body-tiny-font);
  }
`;
