import * as S from './style';
import footer from '@image/appIconStack.png';

const Footer = () => {
  return (
    <S.Footer>
      <div className="footerLogo">
        <img src={footer} />
      </div>
      <div className="footerTextContainer">
        <div className="footerTextTop">
          <p>{'이용약관'}</p>
          <p>{'개인정보 처리방침'}</p>
        </div>
        <div className="footerTextBottom">
          <div className="footerRow">
            <p className="footerRowTitle">{'상호 : '}</p>
            <p>{'DreamD4'}</p>
          </div>
          <div className="footerRow">
            <p className="footerRowTitle">{'메일 : '}</p>
            <p className="footerEmail">{'dream_d4@woowa.store'}</p>
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
