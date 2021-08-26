import { Link } from '../../../utils/router';
import * as S from '../style';
import { useEffect, useRef, useState } from 'react';
import { ICheckRes } from '@middle/type/auth/check';
import { HeaderLoggedIn, HeaderNotLoggedIn } from './HeaderCheck';
import Hamberger from '@image/hamberger.svg';
import Slider from '../Slider/Slider';
import DarkMode from '../Dark/DarkMode';
import Search from '../Search/Search';
import MainSvg from '@image/svg/mainHorizontal.svg';
import Recommend from '../Recommend/Recommend';
import { throttle } from '@client/utils/performance';

export interface IHeader {
  check: ICheckRes | null;
  onLogout: () => void;
}
const Header = ({ check, onLogout }: IHeader) => {
  const [isLeft, setIsLeft] = useState(0);
  const [isUp, setIsUp] = useState(false);
  const header = useRef<HTMLDivElement>(null);

  const setHeaderUpPosition = throttle(() => {
    if (header.current) {
      if (window.scrollY >= 60) {
        header.current.classList.add('up');
        setIsUp(true);
      } else {
        header.current.classList.remove('up');
        setIsUp(false);
      }
    }
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', setHeaderUpPosition);
    return () => window.addEventListener('scroll', setHeaderUpPosition);
  }, []);

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
              <Link to="/main">
                <div className="main-logo">
                  <MainSvg />
                </div>
              </Link>
            </S.HeaderItem>

            <S.HeaderItem>
              <Search />
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
      <DarkMode />
    </S.HeaderOuter>
  );
};
// <Recommend /> 를 뻄.

export default Header;
