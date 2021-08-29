import styled from 'styled-components';
import { ContainerItem } from '../common/style';

export const MyReviewResultContainer = styled(ContainerItem)`
  .container-column {
    .column-score {
      width: 120px;
      flex-grow: unset;
    }
    .column-date {
      text-align: center;
      width: 70px;
      flex-grow: 0.5;
    }
  }
  .container-result-list {
    min-height: 455px;
  }
`;
