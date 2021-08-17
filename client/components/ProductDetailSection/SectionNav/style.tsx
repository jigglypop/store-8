import styled from 'styled-components';

export const SectionNav = styled.ul`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: var(--gray6);
  color: var(--text-pastel-black);
  border: 1px solid var(--gray6);
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    flex: 1;
    & > span {
      margin-left: 8px;
      color: var(--text-mint);
    }
  }
  .selected {
    background-color: var(--background-white);
  }
`;
