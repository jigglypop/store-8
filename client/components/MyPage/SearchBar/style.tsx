import styled from 'styled-components';

export const SearchBar = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--body-small-font);
  color: var(--text-black-dark);

  h3 {
    font-size: var(--body-middle-font);
    font-weight: 600;
    margin-bottom: 12px;
    width: 100%;

    @media only screen and (max-width: 1000px) {
      width: 90vw;
    }
  }

  .container-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 940px;
    padding: 20px 20px;
    border: 3px solid var(--gray6);
    color: var(--gray3);

    @media only screen and (max-width: 1000px) {
      /* min-width: 300px; */
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 90vw;
    }

    @media only screen and (max-width: 550px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .label {
      /* color: var(--gray3); */
      font-weight: 800;
    }

    .container-offset-button {
      border: 1px solid var(--gray5);
      border-left: 0px;
      button {
        border-left: 1px solid var(--gray5);
        height: 30px;
        width: 50px;
        font-weight: 500;
      }

      /* @media only screen and (max-width: 800px) {
        width: 302px;
      } */

      @media only screen and (max-width: 800px) {
        width: 152px;
      }

      @media only screen and (max-width: 590px) {
        width: 102px;
      }

      @media only screen and (max-width: 550px) {
        width: 302px;
      }
      @media only screen and (max-width: 360px) {
        width: 243px;
        button {
          border-left: 1px solid var(--gray5);
          height: 30px;
          width: 40px;
          font-weight: 500;
          font-size: var(--body-tiny-font);
        }
      }

      button:hover {
        background-color: var(--gray4);
        color: var(--white);
      }
    }
    .container-date {
      input[type='date'] {
        height: 30px;
        text-align: center;
        border: 1px solid var(--gray5);
        color: var(--text-black-dark);
      }

      @media only screen and (max-width: 920px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media only screen and (max-width: 550px) {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      @media only screen and (max-width: 360px) {
        input[type='date'] {
          width: 130px;
          height: 30px;
          text-align: center;
          border: 1px solid var(--gray5);
          color: var(--text-black-dark);
          font-size: var(--body-tiny-font);
        }
      }
    }

    .button-search {
      height: 30px;
      width: 100px;
      color: var(--white);
      background-color: var(--black);
      font-weight: 600;
      border: 0px;

      @media only screen and (max-width: 550px) {
        width: 90%;
        max-width: 300px;
        height: 30px;
        text-align: center;
        border: 1px solid var(--gray5);
        font-size: var(--body-tiny-font);
      }
    }

    .button-search:hover {
      background-color: var(--pastel-black);
    }
  }
`;

interface IOffsetRadio {
  isSelected: boolean;
}

export const OffsetRadioButton = styled.button<IOffsetRadio>`
  background-color: var(${({ isSelected }) => (isSelected ? '--gray4' : '--white')});
  color: var(${({ isSelected }) => (isSelected ? '--white' : '--gray3')});
`;
