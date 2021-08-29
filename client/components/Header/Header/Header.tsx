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
import CoffeeSvg from '@image/svg/Coffee.svg';
import Recommend from '../Recommend/Recommend';
import { throttle } from '@client/utils/performance';
import StoreMode from '../Store/StoreMode';
import GoIntro from '../GoIntro/GoIntro';
import { $ } from '@client/utils/jQurey';

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

  const hambergerUp = throttle(() => {
    if (isLeft === 0) {
      setIsLeft(150);
    } else {
      setIsLeft(0);
    }
  }, 200);
  useEffect(() => {
    $('.hamberger-outer').on('mouseenter', hambergerUp);
    return () => {
      $('.hamberger-outer').on('mouseenter', hambergerUp);
    };
  }, []);

  return (
    <S.HeaderOuter>
      <S.Header isLeft={isLeft}>
        <div className="headerInner" ref={header}>
          <div className="left">
            <S.HeaderItem>
              <div className="hamberger-outer" onClick={(e) => hambergerUp(e)}></div>
              <div className="hamberger">
                <Hamberger />
              </div>
            </S.HeaderItem>
            <S.HeaderItem className="isSSmallHeader logo">
              <Link to="/main">
                <>
                  <div className="main-logo">
                    <MainSvg />
                  </div>
                  <div className="coffee-logo">
                    <CoffeeSvg />
                  </div>
                </>
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
      <div className="fab-container">
        <GoIntro />
        <DarkMode />
        <StoreMode />
      </div>
      <Recommend />
    </S.HeaderOuter>
  );
};

export default Header;
