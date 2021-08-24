import styled from 'styled-components';

export const SearchBar = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  font-size: var(--body-small-font);
  color: var(--text-black-dark);

  h3 {
    font-size: var(--body-middle-font);
    font-weight: 600;
    margin-bottom: 12px;
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

      button:hover {
        background-color: var(--gray4);
        color: var(--white);
      }
    }

    input[type='date'] {
      height: 30px;
      text-align: center;
      border: 1px solid var(--gray5);
      color: var(--text-black-dark);
    }

    .button-search {
      height: 30px;
      width: 100px;
      color: var(--white);
      background-color: var(--black);
      font-weight: 600;
      border: 0px;
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
