import styled from 'styled-components';

export const Pagination = styled.div`
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
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.4);
  }
`;

export const paginationItem = styled.div`
  margin: 10px;
  cursor: pointer;

  p {
    color: var(--text-white);
  }
  .now {
    font-size: 20px;
    font-weight: 800;
    color: var(--text-picker);
  }
`;
