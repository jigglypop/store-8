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
`;
