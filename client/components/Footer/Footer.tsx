import * as S from './style';
import { Link } from '@utils/router';
import FooterSvg from '@image/svg/mainVertical.svg';

const Footer = () => {
  return (
    <S.Footer>
      <FooterSvg className="footerLogo" />
      <div className="footerTextContainer">
        <div className="footerTextTop">
          <Link to="usage">
            <p>{'이용약관'}</p>
          </Link>
          <Link to="private">
            <p>{'개인정보 처리방침'}</p>
          </Link>
        </div>
        <div className="footerTextBottom">
          <div className="footerRow">
            <p className="footerRowTitle">{'상호 : '}</p>
            <p>{'DreamD4'}</p>
          </div>
          <div className="footerRow">
            <p className="footerRowTitle">{'메일 : '}</p>
            <p
              className="footerEmail"
              onClick={() => {
                window.location.href = 'mailto:dream_d4@woowa.store';
              }}
            >
              {'dream_d4@woowa.store'}
            </p>
          </div>
          <div className="footerRow">
            <p className="footerRowTitle">{'Copyright'}</p>
            <p className="footerCopyTitle">{'DreamD4'}</p>
            <p>{'& Woowa Brothers Corp. All right Reserved'}</p>
          </div>
        </div>
      </div>
    </S.Footer>
  );
};

export default Footer;
