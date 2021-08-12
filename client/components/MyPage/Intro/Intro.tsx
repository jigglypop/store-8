import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  couponCount: number;
  mileage: number;
  name: string;
  grade: string;
}

export default function Intro({ couponCount, mileage, name, grade }: Props): ReactElement {
  return (
    <S.Intro>
      <h2>반가워요,</h2>
      <div className="container-user-point">
        <S.UserPoint className="container-user-coupon">
          <div>쿠폰</div>
          <div className="text-bold">
            <b>{couponCount}</b>장
          </div>
        </S.UserPoint>
        <S.UserPoint>
          <div>적립금</div>
          <div className="text-bold">
            <b>{mileage}</b>원
          </div>
        </S.UserPoint>
      </div>
      <div className="text-user-info">
        <div>{name}님의</div>
        <div>회원등급은 {grade}그룹 입니다.</div>
      </div>
    </S.Intro>
  );
}
