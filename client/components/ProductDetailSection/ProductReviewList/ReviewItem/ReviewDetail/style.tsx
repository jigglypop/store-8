// import styled from '@client/lib/styledComponent';
import styled from 'styled-components';

export const ReviewDetail = styled.div`
  width: 100%;
  background-color: var(--footer-background-dark);
  color: var(--text-black-dark);
  font-size: var(--body-middle-font);
  padding: 50px;
  .review-detail__img {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    img {
      max-width: 500px;
      margin-bottom: 30px;
    }
  }

  .review-detail__btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 33px;
    .review-detail__edit-btn {
      cursor: pointer;
      stroke: var(--text-black-dark);
    }
    .review-detail__delete-btn {
      cursor: pointer;
      stroke: var(--text-red);
      margin-left: 20px;
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
        border: 1px solid var(--background-dark-mint);
        fill: rgba(0, 0, 0, 0);
        stroke: var(--background-mint);
        margin-right: 12px;
      }
      .review__like-btn.selected {
        fill: var(--background-mint);
      }

      .review__dislike-btn {
        border: 1px solid var(--red);
        fill: rgba(0, 0, 0, 0);
        stroke: var(--red);
      }
      .review__dislike-btn.selected {
        fill: var(--red);
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .review-detail__info {
      .review-detail__contents {
        padding-right: 30px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: var(--body-tiny-font);
    .review-detail__info {
      .review-detail__contents {
        margin-bottom: 20px;
      }
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 375px) {
    font-size: var(--body-tiny-font);
    padding-left: 0;
    padding-right: 0;
  }
`;
