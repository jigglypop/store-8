import styled from 'styled-components';

// 메인
export const MainPage = styled.div`
  position: relative;
  overflow-x: hidden;
  height: 100%;
  margin: 0px 100px;

  .title {
    background-color: var(--footer-background-dark);
    margin: 10px;
    padding: 30px;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    color: var(--text-black-dark);
  }
`;
