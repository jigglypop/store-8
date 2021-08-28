import styled from 'styled-components';

export const CategoryPagination = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  min-width: 200px;
  height: 100px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  z-index: 8;

  .pagination-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.4);
    color: var(--text-white);
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`;

export const PaginationItem = styled.div`
  margin: 10px;
  cursor: pointer;
  .pagination-text {
    p {
      color: var(--text-white);
    }
    .now {
      font-size: 20px;
      font-weight: 800;
      color: var(--text-picker);
    }
  }
  @media only screen and (max-width: 600px) {
    margin: 5px;
    .pagination-text {
      p {
        font-size: 12px;
      }
      .now {
        font-size: 12px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    margin: 3px;
  }
`;
