import styled from '@lib/styledComponent';

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 240px;
  background: var(--footer-background-dark);
  padding-left: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .link-to {
    cursor: pointer;
  }

  .footerLogo {
    .mainVertical_svg__later-dark {
      fill: var(--text-pastel-black-dark);
    }
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
      color: var(--text-pastel-black-dark);
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
        color: var(--text-black-dark);
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
