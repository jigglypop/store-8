import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';

import Avatar from '@components/common/Avatar/Avatar';
import { useCheck } from '@client/hooks/auth/check';
import { useOrder } from '@client/hooks/order/order';
import { RootState } from '@store/index';
import { getCoupon } from '@store/coupon/coupon';

export default function Intro(): ReactElement {
  const { check } = useCheck();
  // { couponCount, mileage, name, grade } 에 해당하는 customHook 을 만들거나,
  // useEffect로 API 요청
  // 임시로 둠
  const { grade } = { grade: '일반회원' };
  const { coupon } = useSelector((state: RootState) => state.coupon);
  const [couponCount, setCouponCount] = useState(0);
  const { mileage, getUsableMileage } = useOrder();
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO : User ID 빼기
    dispatch(getCoupon({ userId: 1 }));
    getUsableMileage();
  }, []);

  useEffect(() => {
    let temp = 0;
    coupon.forEach((element) => {
      if (!element.isUsed) temp += 1;
    });
    setCouponCount(temp);
  }, [coupon]);

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
