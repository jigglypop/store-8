import styled from 'styled-components';

type IStoreMode = {
  storemode: boolean;
};

export const StoreMode = styled.div<IStoreMode>`
  z-index: 20;
  padding-left: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  width: 50px;
  height: 50px;
  border-radius: 40px;

  transition: all 0.3s ease-in;
  cursor: pointer;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  background-color: ${({ storemode }) =>
    storemode ? 'var(--text-pastel-black-nonwhite-dark);' : 'rgba(0, 0, 0, 0.8);'};

  box-shadow: ${({ storemode }) =>
    storemode ? '0 0 10px rgba(0, 0, 0, 0.5);' : '0 0 20px black;'};

  &:hover {
    height: 50px;
    @media only screen and (min-width: 0px) {
      width: 50px;
    }
    @media only screen and (min-width: 375px) {
      width: 50px;
    }
    @media only screen and (min-width: 768px) {
      width: 150px;
    }
    @media only screen and (min-width: 1300px) {
      width: 150px;
    }
    & > p {
      line-height: 42px;

      @media only screen and (min-width: 0px) {
        width: 42px;
      }
      @media only screen and (min-width: 375px) {
        width: 42px;
      }
      @media only screen and (min-width: 768px) {
        width: 100px;
      }
      @media only screen and (min-width: 1300px) {
        width: 100px;
      }
      display: inherit;
      white-space: nowrap;
      text-overflow: clip;
    }
  }
  &:hover > p {
    @media only screen and (min-width: 0px) {
      display: none;
    }
    @media only screen and (min-width: 375px) {
      display: none;
    }
    @media only screen and (min-width: 768px) {
      display: inherit;
      white-space: nowrap;
      text-overflow: clip;
    }
    @media only screen and (min-width: 1300px) {
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
