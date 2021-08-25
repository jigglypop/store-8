import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';

import CouponModal from './CouponModal/CouponModal';
import Avatar from '@components/common/Avatar/Avatar';
import { useCheck } from '@client/hooks/auth/check';
import { useOrder } from '@client/hooks/order/order';
import { RootState } from '@store/index';
import { getCoupon } from '@store/coupon/coupon';
import { useCoupon } from '@client/hooks/order/coupon';

export default function Intro(): ReactElement {
  const { check } = useCheck();
  // { couponCount, mileage, name, grade } 에 해당하는 customHook 을 만들거나,
  // useEffect로 API 요청
  // 임시로 둠
  const { grade } = { grade: '일반회원' };
  const { coupon, getAllCoupon } = useCoupon();
  const { mileage, getUsableMileage } = useOrder();
  const [couponCount, setCouponCount] = useState(0);
  const [isCouponOpenForm, setIsCouponOpenForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO : User ID 빼기
    dispatch(getCoupon({ userId: 1 }));
    getUsableMileage();
    // TODO : 이 부분도 페이지가 바뀔 때 마다 쿠폰을 로딩하는데, 어떤 페이지로 들어와도 쿠폰을 한번은 로딩을 해야해서 고민입니다.
    getAllCoupon();
  }, []);

  useEffect(() => {
    let temp = 0;
    coupon.forEach((element) => {
      if (!element.isUsed) temp += 1;
    });
    setCouponCount(temp);
  }, [coupon]);

  const closeCouponForm = () => {
    setIsCouponOpenForm(false);
  };

  return (
    <S.Intro>
      <div className="left">
        <Avatar imageUrl={check?.imageUrl} width={'150px'} height={'150px'} />
      </div>
      <div className="right">
        <h2>반가워요, {check?.username}님</h2>
        <div className="container-user-point">
          <S.UserPoint onClick={() => setIsCouponOpenForm(true)} className="container-user-coupon">
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
          <div className="user-grade">
            {check?.username}님의 회원등급은 {grade}그룹 입니다.
          </div>
        </div>
      </div>
      {isCouponOpenForm && <CouponModal coupon={coupon} closeForm={closeCouponForm} />}
    </S.Intro>
  );
}
