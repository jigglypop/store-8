import styled from 'styled-components';

export const CategoryPagination = styled.div`
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
      text-shadow: var(--shadow-picker);
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
