import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  couponCount: number;
  bonusPoint: number;
  name: string;
  grade: string;
}

export default function Intro({ couponCount, bonusPoint, name, grade }: Props): ReactElement {
  return (
    <StyledIntro>
      <h2>반가워요,</h2>
      <div className="container-user-point">
        <StyledUserPoint className="container-user-coupon">
          <div>쿠폰</div>
          <div>
            <b>{couponCount}</b>장
          </div>
        </StyledUserPoint>
        <StyledUserPoint>
          <div>적립금</div>
          <div>
            <b>{bonusPoint}</b>원
          </div>
        </StyledUserPoint>
      </div>
      <div>
        {name}님의
        <br />
        회원등급은 {grade}그룹 입니다.
      </div>
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  .container-user-point {
    display: flex;
    .container-user-coupon {
      padding-right: 16px;
      margin-right: 16px;
      border-right: 1px solid #626666;
    }
  }
`;

const StyledUserPoint = styled.div`
  display: flex;
  gap: 16px;
`;
