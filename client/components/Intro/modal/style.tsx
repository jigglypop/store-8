import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 800px;
  height: 65vh;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: var(--text-white);
  font-weight: 800;

  .buttonset {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 100px;

    .button {
      background-color: rgba(0, 0, 0, 0.6);
      color: var(--text-white);
      box-shadow: 0 0 20px var(--black);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      font-weight: 400;
      padding: 30px;
      margin: 20px;
      border-radius: 15px;
      transition: all 0.3s ease-in;

      &:hover {
        color: var(--text-picker);
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .buttonset {
      margin-top: 110px;
      .button {
        h4 {
          font-size: 14px;
        }
        padding: 20px;
        margin: 20px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .buttonset {
      margin-top: 120px;

      h4 {
        font-size: 12px;
      }
      .button {
        padding: 16px;
        margin: 16px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .buttonset {
      h4 {
        font-size: 10px;
      }
      .button {
        padding: 12px;
        margin: 10px;
      }
    }
  }
`;
