import styled from 'styled-components';

export const NavigationSmallBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  color: var(--text-black-dark);

  h3 {
    font-size: var(--body-large-font);
    font-weight: 600;
    padding-bottom: 16px;
    border-bottom: 1.5px solid var(--gray5-button-hover);
    padding-left: 12px;
  }

  .navigation-small-item {
    flex-grow: 1;
    min-width: 250px;
    h4 {
      font-size: var(--body-large-font);
      font-weight: 600;
      margin-bottom: 12px;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 80vw;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;

    .navigation-small-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      h4 {
        font-size: var(--body-large-font);
        font-weight: 600;
        margin-bottom: 12px;
      }
    }
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
    margin: 10px 10px 0px 0px;
    height: 30px;
    transition: all 0.3s ease-in;
    padding: 4px;
    border-radius: 2px;
  }

  div:hover {
    cursor: pointer;
    background-color: var(--gray3);
  }

  .router-link {
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

  @media only screen and (max-width: 550px) {
    justify-content: center;
    margin-bottom: 10px;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0px 10px 0px 0px;
      height: 30px;
      transition: all 0.3s ease-in;
    }
  }
`;
