import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40vw;
  height: 60vh;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text-white);
  font-weight: 800;

  img {
    width: 300px;
    margin: 10px;
  }

  .button {
    margin: 10px;
  }
`;
