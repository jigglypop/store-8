import styled from 'styled-components';

export const RefundFilter = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid var(--text-black-dark);
  margin-top: 15px;

  @media only screen and (max-width: 1000px) {
    width: 90vw;
  }
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
    max-width: 200px;
    flex-grow: 1;
    border: 1px solid var(--text-black-dark);
    margin: -1px;    
    z-index: 1;
    border-bottom: none;
    `
      : `
    height: 50px; 
    max-width: 200px;
    flex-grow: 1;
    border: 1px solid var(--text-black-dark);
    border-bottom: none;
    `}
  align-items: flex-end;

  @media only screen and (max-width: 500px) {
    background-color: var(--body-background-dark);
    color: var(--text-black-dark);
    ${({ isClicked }) =>
      isClicked
        ? `
      height: 40px; 
      max-width: 150px;
      flex-grow: 1;
      border: 1px solid var(--text-black-dark);
      margin: -1px;    
      z-index: 1;
      border-bottom: none;
      `
        : `
      height: 30px; 
      max-width: 150px;
      flex-grow: 1;
      border: 1px solid var(--text-black-dark);
      border-bottom: none;
      `}
    font-size: var(--body-small-font);
  }
`;
