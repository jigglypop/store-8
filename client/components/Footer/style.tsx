import styled from '@lib/styledComponent';

// 푸터 부분
export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 240px;
  background: var(--background-gray);
  padding-left: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .footerLogo {
    img {
      width: 160px;
      object-fit: contain;
      margin-right: 50px;
    }
  }
  .footerTextContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 114px;
  }

  .footerTextTop {
    width: 100%;
    display: flex;
    flex-direction: row;
    p {
      font-size: var(--body-middle-font);
      color: var(--text-dark-gray);
      font-weight: 700;
      margin-right: 12px;
    }
  }

  .footerTextBottom {
    display: flex;
    flex-direction: column;

    .footerRow {
      display: flex;
      flex-direction: row;
      margin-top: 12px;
      p {
        font-size: var(--body-middle-font);
      }
      .footerRowTitle {
        margin-right: 8px;
      }
      .footerCopyTitle {
        margin-right: 8px;
        font-weight: 600;
      }
      .footerEmail {
        color: var(--text-mint);
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
