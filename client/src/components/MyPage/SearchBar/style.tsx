import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
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
  input[type='date'] {
    height: 30px;
    text-align: center;
    border: 1px solid var(--gray5);
  }
`;

interface IOffsetRadio {
  isSelected: boolean;
}

export const OffsetRadioButton = styled.button<IOffsetRadio>`
  background-color: var(${({ isSelected }) => (isSelected ? '--gray5' : '--white')});
`;
