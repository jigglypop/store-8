import styled from 'styled-components';

export const NavigationSmallBar = styled.div`
  margin: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  color: var(--text-black-dark);

  h3 {
    font-size: var(--body-large-font);
    font-weight: 600;
    padding-bottom: 16px;
    border-bottom: 1.5px solid var(--gray5-button-hover);
    padding-left: 12px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavigatorGroup = styled.div`
  display: flex;
  width: 100%;
  font-size: var(--body-small-font);

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    height: 30px;
    transition: all 0.3s ease-in;
  }

  div:hover {
    cursor: pointer;
    background-color: var(--gray3);
  }

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
