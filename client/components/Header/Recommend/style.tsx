import styled from 'styled-components';

export const Recommend = styled.div`
  position: fixed;
  bottom: 130px;
  left: 50px;

  z-index: 5;

  @media only screen and (min-width: 0px) {
    display: none;
  }
  @media only screen and (min-width: 1300px) {
    display: inherit;
  }
`;

type IStoreMode = {
  storemode: boolean;
};

export const RecommendItem = styled.div<IStoreMode>`
  width: 200px;
  height: 100px;
  border-radius: 10px;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;

  color: var(--text-white);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  background-color: ${({ storemode }) =>
    storemode ? 'var(--text-pastel-black-nonwhite-dark);' : 'rgba(0, 0, 0, 0.8);'};

  box-shadow: ${({ storemode }) =>
    storemode ? '0 0 10px rgba(0, 0, 0, 0.5);' : '0 0 20px black;'};

  .recommend-item {
    margin: 5px;
    font-size: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .recomment-item-link {
    cursor: pointer;
  }
  .recommend-item:hover {
    transform-origin: left;
    transform: scale(1.2);
  }
  h4 {
    margin: 5px;
    color: var(--text-picker);
  }

  path {
    fill: var(--text-white);
  }
`;
