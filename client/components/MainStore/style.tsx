import styled from 'styled-components';

export interface ILayoutWrapper {
  isMain: boolean;
}
export interface ITag {
  isUp: boolean;
}
export const VideoLoader = styled.div``;

export const Tag = styled.div<ITag>`
  background-color: rgba(0, 0, 0, 0.6);
  margin-left: -50px;
  margin-top: ${(prop) => (prop.isUp ? '20px' : '50px')};
  font-size: 6px;
  min-width: 50px;
  position: relative;
  width: 120px;
  color: var(--text-white);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  width: 100vw;
  height: 100vh;

  .info {
    position: fixed;
    width: 30vw;
    height: 60vh;
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
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
    color: var(--text-white);
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    transition: all 0.3s ease-in;

    h1 {
      font-size: 30px;
      color: var(--text-picker);
    }

    h4 {
      font-size: 18px;
      line-height: 2rem;
    }
  }

  .ui {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
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
