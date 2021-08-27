import styled from 'styled-components';

export const StoreMode = styled.div`
  position: fixed;
  bottom: 120px;
  left: 50px;
  z-index: 20;
  padding-left: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  width: 50px;
  height: 50px;
  border-radius: 40px;

  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px var(--text-black);

  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    width: 150px;
    height: 50px;
    & > p {
      display: inherit;
      white-space: nowrap;
      text-overflow: clip;
    }
  }
  & > p {
    font-size: 14px;
    color: var(--text-picker);
    margin-left: 8px;
    display: none;
  }

  path {
    fill: var(--text-picker);
    stroke: var(--text-picker);
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

export const StoreModeItem = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.6);
  color: var(--text-white);
  box-shadow: 0 0 20px var(--black);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

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

  path {
    fill: var(--text-white);
  }
`;
