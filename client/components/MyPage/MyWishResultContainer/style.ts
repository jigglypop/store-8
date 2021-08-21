import styled from 'styled-components';
import { ContainerItem } from '../common/style';

export const MyWishResultContainer = styled(ContainerItem)`
  .container-result-list {
    width: 100%;
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

  .container-column {
    grid-template-columns: 1fr 2fr 1fr;

    .common-button {
      grid-column: 1/2;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .common-title {
      grid-column: 2/3;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .common-price {
      grid-column: 3/4;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
