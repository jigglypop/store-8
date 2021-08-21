import styled from 'styled-components';

export const NavigationBar = styled.div`
  margin: 20px;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 30px;
  color: var(--text-black-dark);

  h3 {
    font-size: var(--body-large-font);
    font-weight: 600;
    padding-bottom: 16px;
    border-bottom: 1.5px solid var(--gray5-button-hover);
    padding-left: 12px;
  }
`;

export const NavigatorGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 12px; */
  font-size: var(--body-small-font);

  h4 {
    font-size: var(--body-middle-font);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .router-link {
    padding: 10px 12px;
    color: var(--text-black-dark);
    cursor: pointer;
  }

  .router-link:hover {
    font-weight: 600;
    color: var(--black);
    background-color: var(--background-button-clicked);
  }

  .clicked {
    font-weight: 600;
    color: var(--black);
    background-color: var(--background-button-clicked);
  }
`;
