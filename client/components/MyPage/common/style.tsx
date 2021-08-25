import styled from 'styled-components';

// export const SectionItem = styled.div`
//   margin: 0 30px;
//   grid-column: 2/3;
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
//   padding-top: 12px;
//   min-height: 650px;
// `;

export const MyPage = styled.div`
  margin-top: 12px;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  min-height: 650px;
`;

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 12px;
  margin-bottom: 30px;
  min-height: 620px;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  margin-top: 32px;
  color: var(--text-black-dark);

  .container-column {
    color: var(--text-black);
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: var(--gray6);
    border-top: 1px solid var(--gray4);
    border-bottom: 1px solid var(--gray5);

    > * {
      width: 70px;
      flex-grow: 1;
      text-align: center;
      font-size: var(--body-small-font);
      font-weight: 600;
      padding: 10px 0px;
    }
  }

  .container-result-list {
    width: 100%;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-no-data {
      margin-top: 65px;
      font-size: var(--body-small-font);
      color: var(--gray2);
      text-align: center;
      width: 100%;
    }

    &.no-data {
      border-bottom: 1px solid var(--gray5);

      * {
        display: hidden;
      }

      .text-no-data {
        display: block;
      }
    }
  }
`;

export const TextNoData = styled.div`
  text-align: center;
  height: 75px;
  margin-top: 70px;
`;

// export const ContainerItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 940px;
//   color: var(--text-black-dark);

//   .container-column {
//     margin-top: 12px;
//     display: grid;
//     width: 100%;
//     background-color: var(--gray6);
//     border-top: 1px solid var(--gray4);
//     border-bottom: 1px solid var(--gray5);
//     color: var(--text-black);

//     > * {
//       flex-grow: 1;
//       text-align: center;
//       font-size: var(--body-small-font);
//       font-weight: 600;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 50px;
//     }
//   }

//   &.no-data {
//     * {
//       display: hidden;
//     }

//     .text-no-data {
//       display: block;
//     }
//   }
// `;
