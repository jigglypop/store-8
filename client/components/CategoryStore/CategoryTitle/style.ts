import styled from 'styled-components';

export const CategoryStoreTitle = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  z-index: 8;

  .category-name {
    h4 {
      font-family: 'Do Hyeon';
      font-size: 40px;
      font-weight: 800;
      color: var(--text-picker);
      text-shadow: 0 0 10px var(--tag-picker);
    }
    background-color: rgb(0, 0, 0, 0.8);
    padding: 20px 50px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`;
