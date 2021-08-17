import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  margin-top: 32px;
  .container-column {
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

    .column-title {
      width: 200px;
    }
  }

  .container-result-list {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    align-items: center;
    border-bottom: 1px solid var(--gray5);

    .text-no-data {
      margin-top: 65px;
      font-size: var(--body-small-font);
      color: var(--gray2);
      text-align: center;
      width: 100%;
    }
  }

  &.no-data {
    * {
      display: hidden;
    }

    .text-no-data {
      display: block;
    }
  }
`;
