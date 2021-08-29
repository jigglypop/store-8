import styled from 'styled-components';

export const GoIntro = styled.div`
  z-index: 20;
`;

type IStoreMode = {
  storemode: boolean;
};

export const GoIntroItem = styled.div<IStoreMode>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  background-color: ${({ storemode }) =>
    storemode ? 'var(--text-pastel-black-nonwhite-dark);' : 'rgba(0, 0, 0, 0.8);'};

  box-shadow: ${({ storemode }) =>
    storemode ? '0 0 10px rgba(0, 0, 0, 0.5);' : '0 0 20px black;'};

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
