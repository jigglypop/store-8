import { Link } from '@src/lib/react-router/ReactRouter';
import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {}

export default function NavigationBar({}: Props): ReactElement {
  return (
  <S.NavigationBar>
    <h4>쇼핑정보</h4>
    <S.NavigatorGroup>
      <Link to="/order-list">주문목록/배송조회</Link>
      <Link to="/cancel-list">취소/반품/교환 내역</Link>
      <Link to="/refund-list">환불 내역</Link>
      <Link to="/wish-list">찜리스트</Link>
      <Link to="/coupon">쿠폰함</Link>
      <Link to="/mileage">적립금</Link>
    </S.NavigatorGroup>
    
    <h4>회원정보</h4>
    <S.NavigatorGroup>
      <Link to="/my-page-qa">1:1 문의게시판</Link>
      <Link to="/my-page-password-check">회원정보 변경</Link>
      <Link to="/shipping">배송지 관리</Link>
      <Link to="/my-page-goods-qa">나의 상품문의</Link>
      <Link to="/my-page-goods-review">나의 상품후기</Link>
    </S.NavigatorGroup>
  </S.NavigationBar>
  );
}
