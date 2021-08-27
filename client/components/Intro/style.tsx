import styled from 'styled-components';
export interface ILayoutWrapper {
  isMain: boolean;
}

export const Intro = styled.div`
  position: relative;
`;
export const LayoutWrapper = styled.div<ILayoutWrapper>`
  background: linear-gradient(90deg, #8e2de2, #4a00e0);
  position: absolute;
  background: transparent;
  width: 100%;
  height: ${(props) => (props.isMain ? '80px' : '100vh')};
`;

export const OuterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
`;
export const ThreeWrapper = styled.div`
  background: var(--header-gradient-picker);
  width: 100vw;
  height: 100vh;

  .info {
    position: fixed;
    width: 450px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50px;
    right: 0;
    z-index: 100;
    color: var(--text-white);
    font-size: 14px;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: var(--text-white);
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 15px;

    h1 {
      font-family: 'Do Hyeon', sans-serif;
      font-size: 50px;
      color: var(--text-picker);
    }

    h4 {
      font-size: 16px;
      line-height: 2rem;
    }

    span {
      color: var(--text-picker);
    }
  }

  .ui {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    color: var(--text-white);
    font-size: 14px;
    margin: 10px;
    cursor: pointer;

    .ui-item {
      background-color: rgba(0, 0, 0, 0.6);
      color: var(--text-white);
      box-shadow: 0 0 20px var(--black);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      padding: 20px;
      margin: 20px;
      border-radius: 15px;
      transition: all 0.3s ease-in;

      &:hover {
        color: var(--text-picker);
        cursor: pointer;
      }
    }
  }
`;
