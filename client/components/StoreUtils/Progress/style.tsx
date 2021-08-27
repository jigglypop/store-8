import styled from 'styled-components';

interface IProgress {
  ratio: number;
}

export const Progress = styled.div<IProgress>`
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  color: var(--text-white);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  .progress-inner {
    position: relative;
    width: 60vw;
    height: 60vh;
    background-color: rgba(0, 0, 0, 0.8);
    color: var(--text-white);
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .progress-title {
      font-family: 'Do Hyeon';
      font-size: 80px;
      color: var(--text-picker);
      text-shadow: 0 0 10px var(--text-picker);
    }

    .progress-text {
      font-size: 30px;
    }

    .progress-number {
      font-size: 20px;
    }
    .progress-bar {
      overflow: hidden;
      position: relative;
      padding: 10px 0;
      width: 200px;
      height: 35px;
      background: transparent;
      transition: all 0.3s ease-in;

      .progress-color {
        position: absolute;
        z-index: 2;
        top: 50%;
        transform: translate(${(props) => props.ratio + 'px'}, -50%);
        width: 200px;
        height: 15px;
        background: var(--header-gradient-picker);
        box-shadow: 0 0 10px var(--text-picker);
      }
      .progress-gray {
        position: absolute;
        z-index: 1;
        transform: translateY(-50%);
        top: 50%;
        width: 200px;
        height: 15px;
        background: var(--gray1);
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .progress-inner {
      .progress-title {
        font-size: 60px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .progress-inner {
      .progress-title {
        font-size: 40px;
      }
    }
  }
`;
