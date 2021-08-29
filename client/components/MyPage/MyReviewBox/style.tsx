import styled from 'styled-components';

export const MyReviewBox = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: var(--body-middle-font);
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid var(--line-gray-dark);

  .product-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  > * {
    width: 70px;
    flex-grow: 1;
    text-align: center;
    padding: 10px 0px;
  }

  .column-score {
    display: flex;
    align-items: center;
    padding-left: 10px;
    flex-grow: unset;
    width: 120px;
    margin-right: 20px;
  }

  .column-date {
    text-align: center;
    width: 70px;
    flex-grow: 0.5;
  }

  .wrapper-thumbnail {
    margin: 0 10px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 50px;

    img {
      width: 40px;
      height: 50px;
    }
  }
  .column-title {
    flex-grow: 1;
    text-align: start;
    & > div {
      width: 100%;
      word-break: break-all;
    }
  }

  @media only screen and (max-width: 1000px) {
    font-size: var(--body-small-font);
    .column-date,
    .column-status {
      flex-grow: 0.2;
    }
    .column-product-title {
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 750px) {
    font-size: var(--body-small-font);
    .wrapper-title-thumbnail {
      display: none;
    }
    .column-product-title {
      flex-grow: 0;
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 500px) {
    font-size: var(--body-small-font);
    .column-score {
      display: flex;
      align-items: center;
      padding-left: 10px;
      flex-grow: unset;
      width: 80px;
      margin-right: 10px;
      & svg {
        width: 15px;
        height: 15px;
      }
    }

    .column-title {
      padding-right: 10px;
    }
    .column-status,
    .column-product {
      flex-grow: 0;
    }
    .column-date {
      display: none;
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
