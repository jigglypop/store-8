import styled from 'styled-components';
import { MainItem } from '../common/style';

export const MainGift = styled(MainItem)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    grid-row: 1/2;
  }

  .content {
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
  }

  .gift-link {
    cursor: pointer;
  }

  .gift-item {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 60vw 1fr;

    .image {
      grid-column: 1/2;
      img {
        width: 60vw;
      }
    }

    .text {
      margin: 10px;
      grid-column: 3/4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: flex-start;
    }
  }

  .large {
    font-size: 25px;
    color: var(--text-black-dark);
    line-height: 45px;
    margin-bottom: 8px;
  }

  .small {
    font-size: 14px;
    color: var(--text-black-dark);
  }
  @media only screen and (max-width: 1200px) {
    .gift-item {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr;
      .text {
        grid-row: 1/2;
        grid-column: 1/3;
      }
      .image {
        grid-column: 1/3;
        grid-row: 2/3;
        img {
          width: 90vw;
        }
      }
    }
  }
`;
