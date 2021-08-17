import styled from '@lib/styledComponent';

// 푸터 부분
export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;

  .footerInner {
    position: relative;
    width: 100%;
    height: 230px;
    bottom: 0;
    background: var(--footer-background-dark);
  }
  .footerWrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
  }

  .footerLogo {
    grid-column: 1/2;
    width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      width: 100px;
    }
  }
  .footerTextTop {
    grid-column: 2/3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      margin: 5px;
      font-size: 14px;
      color: var(--gray2);
      font-weight: 800;
    }
  }

  .footerTextBottom {
    grid-column: 3/4;
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
          color: var(--text-black-dark);
          border-right: 2px solid var(--grayC);
        }
      }
    }
  }
`;
