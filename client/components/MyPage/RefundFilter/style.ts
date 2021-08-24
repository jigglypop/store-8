import styled from 'styled-components';

export const RefundFilter = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid var(--gray3);
  margin-top: 15px;
`;

interface IButtonIndex {
  isClicked: boolean;
}

export const FilterButton = styled.button<IButtonIndex>`
  background-color: var(--body-background-dark);
  color: var(--text-black-dark);
  ${({ isClicked }) =>
    isClicked
      ? `
    height: 65px; 
    width: 200px;
    border: 1px solid var(--gray3);
    margin: -1px;    
    z-index: 1;
    border-bottom: none;
    `
      : `
    height: 50px; 
    width: 200px;
    border: 1px solid var(--gray4);
    border-bottom: none;
    `}
  align-items: flex-end;
`;
