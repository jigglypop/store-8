import styled, { keyframes } from 'styled-components';

export const Tip = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .tip-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 90vh;
    width: 90vw;
    color: var(--text-white);
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 15px;

    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 20px;
      cursor: pointer;
    }
  }

  &.isNotDisplay {
    display: none;
  }
`;

const textBlink = keyframes`
  0%{
    color: var(--text-white)
  }
  100%{
    color: var(--text-picker)
  }

`;

export const TipButton = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 120px;
  right: 50px;
  width: 100px;
  height: 50px;
  z-index: 9;
  color: var(--text-white);
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  animation: ${textBlink} 1s alternate infinite;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    top: 140px;

    width: 80px;
    height: 40px;
    .tip-item {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 600px) {
    top: 160px;

    width: 70px;
    .tip-item {
      font-size: 12px;
    }
  }
`;

export const TipItem = styled.div`
  position: relative;
  color: var(--text-white);

  h1 {
    font-family: 'Do Hyeon';
    font-size: 40px;
    font-weight: 800;
  }

  .img-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    img {
      width: 400px;
    }
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
    .img-content {
      img {
        width: 300px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
    .img-content {
      img {
        width: 250px;
      }
    }
  }
`;
