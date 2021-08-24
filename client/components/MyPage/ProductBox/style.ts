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
`;

export const TextNoData = styled.div`
  text-align: center;
  height: 75px;
  margin-top: 70px;
`;

// export const ProductBox = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100px;
//   margin-bottom: 3px;
//   display: grid;
//   flex-wrap: wrap;
//   grid-template-columns: 1fr 2fr 1fr;

//   .product-link {
//     display: flex;
//     position: relative;
//     width: 100%;
//     justify-content: flex-start;
//     align-items: center;
//   }

//   > * {
//     flex-grow: 1;
//     height: 100%;
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     font-size: var(--body-small-font);
//     font-weight: 600;
//     padding: 10px 0px;
//     gap: 2px;
//   }

//   .column-button {
//     grid-column: 1/2;
//     position: relative;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .column-title {
//     grid-column: 2/3;
//     position: relative;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     .wrapper-thumbnail {
//       margin: 0 10px;
//       background-color: rgba(0, 0, 0, 0.3);
//       width: 40px;
//       height: 50px;

//       img {
//         width: 40px;
//         height: 50px;
//       }
//     }

//     .container-title {
//       display: flex;
//       flex-direction: column;
//       gap: 3px;

//       .text-option {
//         color: var(--text-lightgray);
//         text-align: left;
//       }
//     }

//     .column-price {
//       grid-column: 3/4;
//       position: relative;
//       width: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }

//   .column-product {
//     span {
//       color: var(--text-gray);
//     }
//   }

//   .column-confirm {
//     button {
//       height: 23px;
//       width: 70px;
//       color: var(--white);
//       background-color: var(--black);
//       font-size: var(--body-small-font);
//       font-weight: 500;
//       border: 0px;
//       margin-bottom: 2px;
//     }

//     button:hover {
//       background-color: var(--pastel-black);
//       font-weight: 600;
//     }
//   }
// `;

// export const TextNoData = styled.div`
//   display: hidden;
//   text-align: center;
//   height: 75px;
//   margin-top: 70px;
// `;
