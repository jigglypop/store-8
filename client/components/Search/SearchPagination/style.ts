import styled from 'styled-components';

export const SearchPagination = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 20px;
    // box-shadow: 0 0 10px rgb(0, 0, 0, 0.4);
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
