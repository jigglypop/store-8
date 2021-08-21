import React, { ReactElement } from 'react';
import * as S from './style';
import { useCheck } from '@client/hooks/auth/check';
import Avatar from '@client/components/common/Avatar/Avatar';

interface Props {
  couponCount: number;
  mileage: number;
  name: string;
  grade: string;
}

export default function Intro({ couponCount, mileage, name, grade }: Props): ReactElement {
  const { check } = useCheck();
  return (
    <S.Intro>
      <div className="left">
        <Avatar imageUrl={check?.imageUrl} width={'150px'} height={'150px'} />
      </div>
      <div className="right">
        <h2>반가워요, {check?.username}님</h2>
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
          <div>
            {check?.username}님의 회원등급은 {grade}그룹 입니다.
          </div>
        </div>
      </div>
    </S.Intro>
  );
}
