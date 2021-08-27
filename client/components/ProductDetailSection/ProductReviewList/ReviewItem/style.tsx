import styled from 'styled-components';

export const ReviewItem = styled.li`
  cursor: pointer;
  background-color: var(--body-background-dark);
  color: var(--text-black-dark);

  & > div,
  .review-info {
    display: flex;
    align-items: center;
  }

  .review-info.no {
    width: 60px;
  }

  .review-info.score {
    margin-right: 16px;
  }

  .review-info.title {
    & > svg {
      stroke: var(--text-white-dark);
      fill: var(--tag-picker);
      margin-left: 8px;
    }
  }

  .review-info.user-id,
  .review-info.date {
    padding: 0;
    width: 120px;
    justify-content: center;
  }
  .review-info.status {
    padding: 0;
    width: 60px;
    justify-content: center;
    span {
      margin-left: 8px;
      color: var(--tag-picker);
    }
  }

  @media only screen and (max-width: 1300px) {
  }
  @media only screen and (max-width: 768px) {
    font-size: var(--body-small-font);
    .review-info.no {
      width: 20px;
    }
    .review-info.user-id,
    .review-info.date {
      display: none;
    }
  }
`;
