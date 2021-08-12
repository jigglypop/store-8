import styled from "styled-components";

export const MainGift = styled.div`
  position: relative;
  width: 100%;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;

  .giftInner {
    position: relative;
    width: 1200px;
    height: 100%;

    display: grid;
    grid-template-rows: 100px 700px;
  }

  .title {
    grid-row: 1/2;
    h3 {
      font-weight: 600;
      letter-spacing: -0.3px;
      font-size: 26px;
      text-align: left;
    }
  }
  .content {
    grid-row: 2/3;
  }

  .giftitem {
    display: grid;
    grid-template-columns: 880px 74px;

    .image {
      grid-column: 1/2;
    }
    .text {
      grid-column: 3/4;

      .large {
        font-size: 30px;
        color: #333;
        line-height: 45px;
        margin-bottom: 8px;
      }

      .small {
        font-size: 14px;
      }
    }
  }
`;
