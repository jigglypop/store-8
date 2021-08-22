import styled from '@lib/styledComponent';

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
    transform: scale(0.4);
    transform-origin: center;
    margin-right: -120px;
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
