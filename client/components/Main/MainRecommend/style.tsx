import styled from 'styled-components';
import { MainItem } from '../common/style';

export const MainRecommend = styled(MainItem)`
  position: relative;
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-inner {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    grid-row: 1/2;
    position: relative;
    width: 100%;
    display: flex;
  }

  .content {
    position: relative;
    width: 100%;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
  }

  .rec-link {
    cursor: pointer;
  }

  .rec-item {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;

    .image {
      position: relative;
      width: 100%;
      grid-column: 2/3;
      grid-row: 1/3;
      img {
        position: relative;
        width: 100%;
        height: 290px;
        object-fit: cover;
      }
    }

    .text {
      margin: 10px;
      grid-column: 1/2;
      grid-row: 1/3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: flex-start;
    }
  }

  .large {
    font-size: 22px;
    color: var(--text-black-dark);
    line-height: 45px;
    margin-bottom: 8px;
  }

  .small {
    font-size: 14px;
    color: var(--text-black-dark);
  }

  .number {
    color: var(--text-dark-picker);
  }

  .text-wrapper {
    display: flex;
    flex-direction: row;
    & > p {
      margin: 0px 6px 0px 0px;
    }
    & > h3 {
      margin: 0px 8px 0px 0px;
    }
    & > .number {
      margin: 0px;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 897.5px;

    .large {
      font-size: 20px;
    }

    .small {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 595px;

    .large {
      font-size: 15px;
    }

    .small {
      font-size: 12px;
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 292.5px;
    .rec-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .large {
      font-size: 12px;
    }

    .small {
      font-size: 10px;
    }
  }
`;
