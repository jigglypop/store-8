import styled from 'styled-components';

// 메인
export const MainPage = styled.div`
  position: relative;
  width: var(--app-width);
  margin: 0px calc(50vw - var(--app-width) / 2) 30px calc(50vw - var(--app-width) / 2);

  .title {
    grid-row: 1/2;
    display: flex;
    align-items: center;

    background-color: var(--footer-background-dark);
    font-family: 'Do Hyeon', sans-serif;
    margin: 10px 0px;
    padding: 30px;
    color: var(--text-black-dark);

    h3 {
      font-size: 24px;
    }
  }
`;
