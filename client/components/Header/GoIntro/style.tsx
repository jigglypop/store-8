import styled from 'styled-components';

export const GoIntro = styled.div`
  position: fixed;
  bottom: 190px;
  left: 50px;
  z-index: 20;
`;

export const GoIntroItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .storemode-item {
    margin: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .storemode-item:hover {
    transform: scale(1.2);
  }
  h4 {
    margin: 5px;
  }

  svg {
    path:first-child {
      fill: var(--text-picker);
      stroke: none;
    }
    circle {
      stroke: var(--text-picker);
    }
    rect {
      fill: var(--text-picker);
    }
  }
`;
