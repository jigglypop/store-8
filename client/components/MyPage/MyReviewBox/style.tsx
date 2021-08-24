import styled from 'styled-components';

export const MyReviewBox = styled.li`
  display: flex;
  align-items: center;
  font-size: var(--body-middle-font);
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid var(--line-gray-dark);

  .product-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  > * {
    width: 70px;
    flex-grow: 1;
    text-align: center;
    padding: 10px 0px;
  }

  .column-score {
    display: flex;
    align-items: center;
    padding-left: 10px;
    flex-grow: unset;
    width: 120px;
    margin-right: 20px;
  }

  .column-date {
    text-align: center;
    width: 70px;
    flex-grow: 0.5;
  }

  .wrapper-thumbnail {
    margin: 0 10px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 50px;

    img {
      width: 40px;
      height: 50px;
    }
  }
`;
