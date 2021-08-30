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

  .img-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 20px 0;

    img {
      width: 30vw;
    }
  }
  @media only screen and (max-width: 600px) {
    .img-content {
      margin: 10px 0;
      flex-direction: column;
      img {
        width: 250px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .img-content {
      margin: 0;
      flex-direction: column;
    }
    img {
      width: 180px;
    }
  }
  .progress-inner {
    position: relative;
    width: 90vw;
    height: 90vh;
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
      margin-top: -50px;
      font-size: 80px;
      color: var(--text-picker);
      text-shadow: 0 0 10px var(--text-picker);
      margin: 0;
      padding: 0;
    }

    .progress-text {
      font-size: 30px;
    }

    .progress-number {
      font-size: 16px;
    }
    .progress-bar {
      margin-top: -10px;
      overflow: hidden;
      position: relative;
      padding: 5px 0;
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
        margin-top: 5px;
        font-size: 40px;
      }

      .progress-number {
        font-size: 15px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .progress-inner {
      .progress-title {
        margin-top: 10px;
        font-size: 25px;
      }
      .progress-number {
        display: none;
      }
    }
  }
`;
