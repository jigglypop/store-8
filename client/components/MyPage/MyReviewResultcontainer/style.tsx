import styled from 'styled-components';

export const MyReviewResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  height: 50px;
  margin-top: 32px;
  color: var(--text-black-dark);

  .container-column {
    color: var(--text-black);
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: var(--gray6);
    border-top: 1px solid var(--gray4);
    border-bottom: 1px solid var(--gray5);

    > * {
      width: 70px;
      flex-grow: 1;
      text-align: center;
      font-size: var(--body-small-font);
      font-weight: 600;
      padding: 10px 0px;
    }

    .column-date {
      text-align: center;
      width: 70px;
    }
  }
`;
