import styled from "styled-components";

// 아이템 부분
export const HeaderItem = styled.li`
  list-style: none;
  .router-link {
    display: inline-block;
    padding: 0 19px;
    font-size: 16px;
    color: #333;
    font-weight: normal;
    text-align: center;
    line-height: 55px;
    cursor: pointer;
  }
`;

// 헤더 부분
export const Header = styled.header`
  .headerInner {
    position: relative;
    background: var(--white);
    width: 100%;
    display: grid;
    grid-template-rows: 40px 100px 55px;
    grid-template-columns: 1fr 400px;
    z-index: 2;
    transition: all 0.3s ease-in;

    .top {
      position: relative;
      padding: 0 50px;
      grid-row: 1/2;
      grid-column: 1/3;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      border-bottom: 1px solid var(--grayC);
      transition: all 0.3s ease-in;
    }

    .mid {
      position: relative;
      grid-row: 2/3;
      grid-column: 1/3;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in;
    }

    .bottom {
      position: relative;
      grid-row: 3/4;
      grid-column: 1/3;

      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 1000px;
      transition: all 0.3s ease-in;

      .bottomText {
        padding: 0 19px;
        font-size: 16px;
        color: #333;
        font-weight: normal;
        text-align: center;
        line-height: 55px;
      }
    }

    img {
      width: 156px;
      height: 39px;
    }
  }
  .headerInner.up {
    position: fixed;
    top: 0;
    left: 0;
    .top {
      border-bottom: 1px solid none;
    }

    .mid {
      grid-row: 1/2;
      grid-column: 1/2;
      justify-content: flex-start;
      padding-left: 45vw;
    }

    .bottom {
      grid-row: 2/3;
      grid-column: 1/3;
      border-top: 1px solid #eaeaea;
    }
  }
`;
