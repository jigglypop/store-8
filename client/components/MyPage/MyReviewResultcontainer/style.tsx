import styled from 'styled-components';
import { ContainerItem } from '@components/MyPage/common/style';

export const MyReviewResultContainer = styled(ContainerItem)`
  .container-column {
    .column-score {
      width: 120px;
      flex-grow: unset;
      margin-right: 20px;
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
  .column-product-title,
  .column-title {
    padding-left: 20px;
    text-align: start;
  }

  @media only screen and (max-width: 1000px) {
    font-size: var(--body-small-font);
    .container-column {
      .column-date {
        flex-grow: 0.2;
      }
    }
  }
  @media only screen and (max-width: 750px) {
    font-size: var(--body-small-font);
    .wrapper-title-thumbnail {
      display: none;
    }
    .container-column {
      .column-date {
        flex-grow: 0.2;
      }
      .column-product-title {
        flex-grow: 0;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    font-size: var(--body-small-font);
    .container-column {
      .column-score {
        width: 80px;
        flex-grow: unset;
        margin-right: 10px;
      }
      .column-date {
        display: none;
      }
    }
    .wrapper-title {
      display: none;
    }
    .column-product {
      .product-link {
        text-align: center;
      }
    }
  }
`;
