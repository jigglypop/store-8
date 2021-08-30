import styled from 'styled-components';
import { ContainerItem } from '@components/MyPage/common/style';

export const OrderResultContainer = styled(ContainerItem)`
  .container-column {
    .column-date {
      text-align: center;
      width: 70px;
    }

    .column-title {
      width: 200px;
    }
  }

  @media only screen and (max-width: 800px) {
    .container-column {
      display: none;
    }

    .container-result-list {
      border-top: 1px solid var(--gray5);
      margin-top: 12px;
    }
  }
`;
