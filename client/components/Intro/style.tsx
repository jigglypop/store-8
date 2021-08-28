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

export const Tag = styled.div`
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.6);
  margin-left: -50px;
  margin-top: -250px;
  min-width: 50px;
  height: 60px;
  position: relative;
  width: 200px;
  color: var(--text-white);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  h6 {
    margin: 5px;
    font-size: 12px;
  }
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
    top: 200px;
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

    @media only screen and (max-width: 1200px) {
      width: 350px;
      height: 250px;
      h1 {
        font-size: 40px;
      }
      h4 {
        font-size: 14px;
        line-height: 2rem;
      }
    }
    @media only screen and (max-width: 900px) {
      width: 300px;
      height: 250px;
      h1 {
        font-size: 35px;
      }
      h4 {
        font-size: 12px;
        line-height: 2rem;
      }
    }
  }

  .ui {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
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
