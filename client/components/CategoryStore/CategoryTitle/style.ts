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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.8);
    padding: 20px 50px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    @media only screen and (max-width: 900px) {
      width: 350px;
      height: 80px;
      .category-name {
        h4 {
          font-size: 35px;
        }
      }
    }
    @media only screen and (max-width: 600px) {
      width: 320px;
      height: 70px;
      .category-name {
        h4 {
          font-size: 26px;
        }
      }
    }
    @media only screen and (max-width: 375px) {
      width: 280px;
      height: 60px;
      .category-name {
        h4 {
          font-size: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    top: 80px;
  }
  @media only screen and (max-width: 600px) {
    top: 70px;
  }
  @media only screen and (max-width: 375px) {
    top: 60px;
  }
`;
