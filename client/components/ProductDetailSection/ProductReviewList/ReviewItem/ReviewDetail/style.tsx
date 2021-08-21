// import styled from '@client/lib/styledComponent';
import styled from 'styled-components';

export const ReviewDetail = styled.div`
  background-color: var(--footer-background-dark);
  color: var(--text-black-dark);

  padding: 50px;
  .review-detail__img {
    display: flex;
    flex-direction: column;
    padding: 30px;
    img {
      max-width: 500px;
      margin-bottom: 30px;
    }
  }

  .review-detail__info {
    display: flex;
    justify-content: space-between;

    padding: 30px;

    .review-detail__contents {
      flex: 1;
      word-break: break-all;
      padding-right: 100px;
      letter-spacing: 1px;
      line-height: 1.5;
    }

    .review-detail__like-btns {
      display: flex;
      button {
        color: var(--text-black-dark);
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 5px;
        & > svg {
          margin-left: 8px;
        }

        & > div {
          padding-top: 3px;
        }
      }
      .review__like-btn {
        border: 1px solid var(--tag-picker);
        fill: rgba(0, 0, 0, 0);
        /* fill: var(--tag-picker); */
        stroke: var(--tag-picker);
        margin-right: 12px;
      }
      .review__dislike-btn {
        border: 1px solid var(--red);
        fill: rgba(0, 0, 0, 0);
        stroke: var(--red);
      }
    }
  }
`;
