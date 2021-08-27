import styled from 'styled-components';

export const CategoryPagination = styled.div`
  position: fixed;
  top: 100px;
  right: 50px;
  min-width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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
`;
