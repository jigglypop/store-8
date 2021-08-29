import styled from 'styled-components';
import { ContainerItem } from '../common/style';

export const MyQuestionResultContainer = styled(ContainerItem)`
  .container-column {
    .column-date,
    .column-status {
      text-align: center;
      width: 70px;
      flex-grow: 0.3;
    }
  }
  .container-result-list {
    min-height: 455px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: var(--body-small-font);
    .container-column {
      .column-date,
      .column-status {
        flex-grow: 0;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    font-size: var(--body-small-font);
    .container-column {
      .column-status,
      .column-product {
        flex-grow: 0;
      }
      .column-date {
        display: none;
      }
    }
    .column-title {
      margin-left: 20px;
      text-align: start;
    }
  }
`;
