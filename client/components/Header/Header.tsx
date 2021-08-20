import { Link } from '../../utils/router';
import * as S from './style';
import { useRef, useState } from 'react';
import { ICheckRes } from '@middle/type/auth/check';
import { HeaderLoggedIn, HeaderNotLoggedIn } from './HeaderCheck';
import main from '@image/appIconLine.png';
import Hamberger from '@image/hamberger.svg';
import Slider from './Slider';
import DarkMode from './DarkMode';
import UserSlider from './UserSlider';

export interface IHeader {
  check: ICheckRes | null;
  onLogout: () => void;
}
const Header = ({ check, onLogout }: IHeader) => {
  const [isLeft, setIsLeft] = useState(0);
  const [isUp, setIsUp] = useState(false);
  const header = useRef<HTMLDivElement>(null);
  window.addEventListener('scroll', () => {
    if (header.current) {
      if (window.scrollY >= 60) {
        header.current.classList.add('up');
        setIsUp(true);
      } else {
        header.current.classList.remove('up');
        setIsUp(false);
      }
    }
  });
  const onToggle = () => {
    if (isLeft === 0) {
      setIsLeft(150);
    } else {
      setIsLeft(0);
    }
  };
  return (
    <S.HeaderOuter>
      <S.Header isLeft={isLeft}>
        <div className="headerInner" ref={header}>
          <div className="left">
            <S.HeaderItem>
              <div className="hamberger" onClick={() => onToggle()}>
                <Hamberger />
              </div>
            </S.HeaderItem>
            <S.HeaderItem className="isSSmallHeader">
              <Link to="/">
                <img src={main} className="main-img" />
              </Link>
            </S.HeaderItem>

            <S.HeaderItem>
              <DarkMode />
            </S.HeaderItem>
          </div>
          <div className="right">
            {check ? (
              <HeaderLoggedIn check={check} onLogout={onLogout} isUp={isUp} />
            ) : (
              <HeaderNotLoggedIn isUp={isUp} onLogout={onLogout} />
            )}
          </div>
        </div>
      </S.Header>
      <Slider isLeft={isLeft} setIsLeft={setIsLeft} isUp={isUp} />
    </S.HeaderOuter>
  );
};

export default Header;
