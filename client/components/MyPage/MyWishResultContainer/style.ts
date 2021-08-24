import styled from 'styled-components';
import { ContainerItem } from '../common/style';

export const MyWishResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  margin-bottom: 12px;
  color: var(--text-black-dark);

  .container-column {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: var(--gray6);
    border-top: 1px solid var(--gray4);
    border-bottom: 1px solid var(--gray5);
    color: var(--text-black);

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
    min-height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-no-data {
      margin-top: 65px;
      font-size: var(--body-small-font);
      color: var(--gray2);
      text-align: center;
      width: 100%;
    }

    &.no-data {
      border-bottom: 1px solid var(--gray5);

      * {
        display: hidden;
      }

      .text-no-data {
        display: block;
      }
    }
  }
`;
