import { ICheckRes } from "@middle/type/auth/check";
import { Link } from "../../utils/router";
import * as S from "./style";

export interface IHeaderNotLoggedIn {
  check: ICheckRes;
  onLogout: () => void;
}
export const HeaderNotLoggedIn = () => {
    return (
      <div className="top">

        <S.HeaderItem>
            <Link to="/login">로그인</Link>
          </S.HeaderItem>
          <S.HeaderItem>
            <Link to="/register">회원가입</Link>
        </S.HeaderItem>
        <S.HeaderItem>
            <Link to="/mypage-order-list">마이페이지</Link>
        </S.HeaderItem>
        <S.HeaderItem>
            <Link to="/cart">장바구니</Link>
        </S.HeaderItem>
    </div>)
}

export const HeaderLoggedIn = ({ check, onLogout }: IHeaderNotLoggedIn ) => {
    return (
    <div className="top">
        <S.HeaderItem>
            { check.username }
          </S.HeaderItem>
          <S.HeaderItem>
            <div onClick={() => onLogout()}>로그아웃</div>
        </S.HeaderItem>
        <S.HeaderItem>
            <Link to="/mypage-order-list">마이페이지</Link>
        </S.HeaderItem>
        <S.HeaderItem>
            <Link to="/cart">장바구니</Link>
        </S.HeaderItem>
    </div>)
}