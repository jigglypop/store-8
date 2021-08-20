import styled from 'styled-components';

// 메인
export const MainPage = styled.div`
  position: relative;
  width: var(--app-width);
  margin: 0px calc(50vw - var(--app-width) / 2) 30px calc(50vw - var(--app-width) / 2);

  .title {
    background-color: var(--background-gray-dark);
    margin: 10px 0px;
    padding-left: 30px;

    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    color: var(--text-black-dark);
  }
`;
