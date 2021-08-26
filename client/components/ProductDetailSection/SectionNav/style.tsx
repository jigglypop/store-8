import styled from 'styled-components';

export const SectionNav = styled.ul`
  position: sticky;
  top: 70px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: var(--background-section-dark);
  color: var(--text-pastel-black-dark);
  border: 1px solid var(--background-section-dark);
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    flex: 1;
    & > span {
      margin-left: 8px;
      color: var(--text-picker);
    }
  }
  .selected {
    color: var(--text-pastel-black-dark);

    background-color: var(--background-select-section-dark);
  }
  width: 100%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
