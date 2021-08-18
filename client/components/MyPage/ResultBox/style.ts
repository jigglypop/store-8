import styled from 'styled-components';

export const ResultBox = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--gray5);

  > * {
    flex-grow: 1;
    width: 70px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--body-small-font);
    font-weight: 600;
    padding: 10px 0px;
    gap: 2px;
  }

  .column-date {
    text-align: left;
    width: 70px;
    border-right: 1px dotted var(--line-gray);
  }

  .column-title {
    flex-direction: row;
    width: 200px;
    justify-content: left;

    .wrapper-thumbnail {
      margin-left: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      width: 40px;
      height: 50px;
    }

    .container-title {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .text-option {
        color: var(--text-lightgray);
      }
    }
  }

  .column-product {
    span {
      color: var(--text-gray);
    }
  }

  .column-confirm {
    button {
      height: 30px;
      width: 70px;
      color: var(--white);
      background-color: var(--black);
      font-size: var(--body-small-font);
      font-weight: 500;
      border: 0px;
      margin-bottom: 2px;
    }

    button:hover {
      background-color: var(--pastel-black);
      font-weight: 600;
    }
  }
`;

export const TextNoData = styled.div`
  display: hidden;
  text-align: center;
  height: 75px;
  margin-top: 70px;
`;
