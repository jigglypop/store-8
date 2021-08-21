import { ICheckRes } from '@middle/type/auth/check';
import { Link } from '../../../utils/router';
import Avatar from '../../common/Avatar/Avatar';
import * as S from '../style';
import Hamberger from '@image/hamberger.svg';
import UserSlider from '../Slider/UserSlider';
import { useState } from 'react';
export interface IHeaderNotLoggedIn {
  isUp: boolean;
  onLogout: () => void;
}

export interface IHeaderLoggedIn {
  isUp: boolean;
  check: ICheckRes;
  onLogout: () => void;
}
export const HeaderNotLoggedIn = ({ isUp, onLogout }: IHeaderNotLoggedIn) => {
  const [isRight, setIsRight] = useState(false);

  const onToggleUser = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <S.HeaderItem className="isBigHeader">
        <Link to="/login">로그인</Link>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <Link to="/register">회원가입</Link>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <Link to="/cart">장바구니</Link>
      </S.HeaderItem>
      <S.HeaderItem className="isSmallHeader">
        <div className="hamberger" onClick={() => onToggleUser()}>
          <Hamberger />
        </div>
        <UserSlider isUp={isUp} onLogout={onLogout} isRight={isRight} />
      </S.HeaderItem>
    </>
  );
};

export const HeaderLoggedIn = ({ check, onLogout, isUp }: IHeaderLoggedIn) => {
  const [isRight, setIsRight] = useState(false);

  const onToggleUser = () => {
    setIsRight(!isRight);
  };
  return (
    <>
      <S.HeaderItem>
        <Link to="/mypage-order-list">
          <Avatar imageUrl={check.imageUrl} />
        </Link>
        <Link to="/mypage-order-list" className="isSSmallHeader">
          {check.username}
        </Link>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <div onClick={() => onLogout()}>로그아웃</div>
      </S.HeaderItem>
      <S.HeaderItem className="isBigHeader">
        <Link to="/cart">장바구니</Link>
      </S.HeaderItem>
      <S.HeaderItem className="isSmallHeader">
        <div className="hamberger" onClick={() => onToggleUser()}>
          <Hamberger />
        </div>
        <UserSlider isUp={isUp} onLogout={onLogout} isRight={isRight} />
      </S.HeaderItem>
    </>
  );
};
