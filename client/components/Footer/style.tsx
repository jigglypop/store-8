import styled from '@lib/styledComponent';

// 헤더 부분
export const Footer = styled.footer`
  .footerInner {
    position: relative;
    width: 100%;
    height: 300px;
    bottom: 0;
    background: #f6f6f6;
  }
  .footerWrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .footerLogo {
    grid-column: 1/2;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      width: 100px;
      height: 76px;
    }
  }
  .footerText {
    grid-column: 2/3;
    position: relative;
    width: 100%;
    display: grid;
    grid-template-rows: 80px 180px;

    .footerTextTop {
      grid-row: 1/2;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        font-size: 14px;
        color: #333;
        font-weight: 800;
      }
    }

    .footerTextBottom {
      grid-row: 2/3;
      margin-top: 20px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .footer-text-bottom-item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 3px;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 3px;

          p {
            padding: 3px;
            font-size: 12px;
            color: var(--grayD);
            border-right: 2px solid var(--grayC);
          }
        }
      }
    }
  }
`;
