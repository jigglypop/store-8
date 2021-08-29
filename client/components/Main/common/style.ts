import styled from 'styled-components';

export const MainItem = styled.div`
  margin: 0;
  position: relative;
  width: 80vw;
  max-height: 2000vh;
  display: grid;
  grid-template-rows: 200px 1fr;

  .main-inner {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-rows: 100px 1fr;
  }
  .title {
    position: relative;
    font-size: 26px;
    width: 100%;
    grid-row: 1/2;
  }
  .content {
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  @media only screen and (max-width: 1200px) {
    .title {
      font-size: 24px;
    }
    .content {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media only screen and (max-width: 900px) {
    .title {
      font-size: 22px;
    }
    .content {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 600px) {
    .title {
      font-size: 20px;
    }
  }
`;
