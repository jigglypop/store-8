import styled from 'styled-components';

export const SearchBar = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  font-size: var(--smallFont);

  h3 {
    font-size: var(--largeFont);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .container-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 1000px;
    padding: 30px 20px;
    border: 2px solid var(--gray5);
    
    button {
      border: 1px solid var(--gray5);
      height: 30px;
      width: 50px;
    }

    button:hover {
      background-color: var(--gray4);
    }

    input[type='date'] {
      height: 30px;
      text-align: center;
      border: 1px solid var(--gray5);
    }

    .button-search {
      width: 100px;
      color: var(--white);
      background-color: var(--black);
      font-weight: 600;
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
`;
