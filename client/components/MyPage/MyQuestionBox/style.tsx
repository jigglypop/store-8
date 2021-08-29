import styled from 'styled-components';

export const MyQuestionBox = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: var(--body-middle-font);
  padding: 10px 0;
  border-bottom: 1px solid var(--line-gray-dark);
  cursor: pointer;
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

  .column-date,
  .column-status {
    text-align: center;
    width: 70px;
    flex-grow: 0.3;
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

  @media only screen and (max-width: 1000px) {
    font-size: var(--body-small-font);
    .column-date,
    .column-status {
      flex-grow: 0;
    }
  }
  @media only screen and (max-width: 500px) {
    font-size: var(--body-small-font);
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
