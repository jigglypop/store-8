import styled from 'styled-components';

export const ProductBox = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--gray5);

  > *,
  .product-link,
  .column-title {
    flex-grow: 1;
    width: 70px;
    height: 100%;
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

  .product-link,
  .column-title {
    flex-grow: 2;
    display: flex;
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
  /* @media only screen and (max-width: 900px) {
    .column-title {
      .wrapper-thumbnail {
      }

      .container-title {
      }
    }
  } */
  @media only screen and (max-width: 600px) {
    .product-link,
    .column-title {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 30%;
    }
    .column-title {
      .wrapper-thumbnail {
        display: none;
      }

      .container-title {
        .text-title {
          font-size: 12px;
        }
      }

      .container-price {
        div {
          font-size: 12px;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .column-title {
      .container-title {
        .text-title {
          font-size: 10px;
        }
      }

      .container-price {
        div {
          font-size: 10px;
        }
      }
    }
  }
`;

export const TextNoData = styled.div`
  text-align: center;
  height: 75px;
  margin-top: 70px;
`;
