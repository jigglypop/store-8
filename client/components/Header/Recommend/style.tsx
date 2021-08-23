import styled from 'styled-components';

export const Recommend = styled.div`
  position: fixed;
  bottom: 110px;
  left: 50px;

  z-index: 5;
`;

export const RecommendItem = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.6);
  color: var(--text-white);
  box-shadow: 0 0 20px var(--black);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  .recommend-item {
    margin: 5px;
    font-size: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .recommend-item:hover {
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
