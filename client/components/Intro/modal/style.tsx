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

  .title {
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 20px;
    color: var(--text-white);
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    padding: 30px;
    margin: 20px;
    border-radius: 15px;
    transition: all 0.3s ease-in;

    &:hover {
      color: var(--text-picker);
    }
  }

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
`;
