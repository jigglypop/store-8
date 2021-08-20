import * as S from '../style';
import { useRef } from 'react';
import { Link } from '@client/utils/router';
import { useCheck } from '@client/hooks/auth/check';

export interface IUserSlider {
  isUp: boolean;
  isRight: boolean;
  onLogout: () => void;
}

const UserSlider = ({ isUp, onLogout, isRight }: IUserSlider) => {
  const { check } = useCheck();
  return (
    <S.UserSlider isUp={isUp} isRight={isRight} className="user-slider">
      {check ? (
        <>
          <S.HeaderItem className="user-slider-item">
            <div onClick={() => onLogout()}>로그아웃</div>
          </S.HeaderItem>
          <S.HeaderItem className="user-slider-item">
            <Link to="/mypage-order-list">마이페이지</Link>
          </S.HeaderItem>
          <S.HeaderItem className="user-slider-item">
            <Link to="/cart">장바구니</Link>
          </S.HeaderItem>
        </>
      ) : (
        <>
          <S.HeaderItem className="user-slider-item">
            <Link to="/login">로그인</Link>
          </S.HeaderItem>
          <S.HeaderItem className="user-slider-item">
            <Link to="/register">회원가입</Link>
          </S.HeaderItem>
          <S.HeaderItem className="user-slider-item">
            <Link to="/cart">장바구니</Link>
          </S.HeaderItem>
        </>
      )}
    </S.UserSlider>
  );
};

export default UserSlider;
