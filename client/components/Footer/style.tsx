import styled from '@lib/styledComponent';

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 240px;
  background: var(--footer-background-dark);
  display: flex;
  align-items: center;

  @media only screen and (min-width: 0px) {
    padding-left: 20px;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 375px) {
    padding-left: 30px;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 80px;
    flex-direction: row;
    justify-content: center;
  }
  @media only screen and (min-width: 1300px) {
    padding-left: 120px;
    flex-direction: row;
    justify-content: flex-start;
  }

  .link-to {
    cursor: pointer;
  }

  .footerLogo {
    margin-right: 24px;

    .mainVertical_svg__later-dark {
      fill: var(--text-pastel-black-dark);
    }
  }

  .footerTextContainer {
    flex-direction: column;
    justify-content: space-between;
    height: 114px;

    @media only screen and (min-width: 0px) {
      display: none;
    }
    @media only screen and (min-width: 375px) {
      display: none;
    }
    @media only screen and (min-width: 768px) {
      display: flex;
    }
    @media only screen and (min-width: 1300px) {
      display: flex;
    }
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
