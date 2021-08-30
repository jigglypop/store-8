import styled from 'styled-components';

export const OrderBox = styled.div`
  width: 100%;
  height: 90px;
  padding: 10px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--gray5);

  > *,
  .column-title {
    flex-grow: 1;
    width: 70px;
    height: 70px;
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
  }

  .product-link,
  .column-title {
    flex-direction: row;
    width: 200px;
    justify-content: left;

    .wrapper-thumbnail {
      margin-left: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      width: 40px;
      height: 50px;

      img {
        width: 40px;
        height: 50px;
      }
    }

    .container-title {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .text-option {
        color: var(--text-lightgray);
        text-align: left;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .column-product {
    span {
      color: var(--text-gray);
    }
  }

  .column-confirm {
    button {
      height: 23px;
      width: 70px;
      color: var(--white);
      background-color: var(--black);
      font-size: var(--body-small-font);
      font-weight: 500;
      border: 0px;
      margin-bottom: 2px;
    }

    .button-disabled,
    .button-disabled:hover {
      background-color: var(--pastel-black);
      font-weight: 500;
      cursor: default;
    }

    button:hover {
      background-color: var(--pastel-black);
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 250px;
    margin-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    > *,
    .column-title {
      width: 100%;
      height: fit-content;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: var(--body-small-font);
      font-weight: 600;
      padding: 0px 0px;
      gap: 2px;
    }

    .column-date {
      text-align: left;
      width: 100%;
    }

    .product-link,
    .column-title {
      order: -1;
      width: 100%;
      height: 50px;
      flex-direction: row;
      justify-content: center;

      .wrapper-thumbnail {
        margin-left: 10px;
        background-color: rgba(0, 0, 0, 0.3);
        width: 40px;
        height: 50px;

        img {
          width: 40px;
          height: 50px;
        }
      }

      .container-title {
        display: flex;
        flex-direction: column;
        gap: 3px;

        .text-option {
          color: var(--text-lightgray);
          text-align: left;
        }
      }

      &:hover {
        cursor: pointer;
      }
    }

    .column-product {
      span {
        color: var(--text-gray);
      }
    }

    .column-confirm {
      button {
        height: 23px;
        width: 50%;
        color: var(--white);
        background-color: var(--black);
        font-size: var(--body-small-font);
        font-weight: 500;
        border: 0px;
        margin-bottom: 2px;
      }

      .button-disabled,
      .button-disabled:hover {
        background-color: var(--pastel-black);
        font-weight: 500;
        cursor: default;
      }

      button:hover {
        background-color: var(--pastel-black);
        font-weight: 600;
      }
    }
  }
`;
