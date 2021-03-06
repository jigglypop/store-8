import { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './style';

import CouponModal from './CouponModal/CouponModal';
import Avatar from '@components/common/Avatar/Avatar';
import { useCheck } from '@client/hooks/auth/check';

import { useOrder } from '@client/hooks/order/order';
import { getCoupon } from '@store/coupon/coupon';
import { useCoupon } from '@client/hooks/order/coupon';
import cache from '@client/utils/cache';

import PenSvg from '@image/svg/pen.svg';
import { EditProfileModal } from '@components/MyPage/EditProfileModal/EditProfileModal';

// TODO : 저도 에러가 나네요... 이게 왜이러지
function kstFormatter(amount?: number, suffix: boolean = true): string {
  if (!amount) {
    if (suffix) {
      return '0원';
    } else {
      return '0';
    }
  }
  if (suffix) {
    return amount.toLocaleString() + '원';
  } else {
    return amount.toLocaleString();
  }
}

export default function Intro(): ReactElement {
  const { check } = useCheck();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
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
    const isLoggedIn = cache.get('token');
    if (isLoggedIn) {
      dispatch(getCoupon(cache.get('token')));
      getUsableMileage();
      getAllCoupon();
    }
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

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  const confirmEditProfile = () => {
    setIsEditProfileModalOpen(false);
  };

  return (
    <S.Intro>
      <div className="left">
        <Avatar imageUrl={check?.imageUrl} width={'150px'} height={'150px'} />
      </div>
      <div className="right">
        <div className="container-greeting">
          <h2>반가워요, {check?.username}님</h2>

          <PenSvg
            fill="var(--text-picker)"
            className="button-edit-profile"
            onClick={() => {
              openEditProfileModal();
            }}
            refs="프로필 이미지와 유저닉네임을 수정할 수 있습니다."
          />
        </div>
        <div className="container-user-point">
          <S.UserPoint onClick={() => setIsCouponOpenForm(true)} className="container-user-coupon">
            <div className="coupon-cursor">쿠폰</div>
            <div className="text-bold coupon-cursor">
              <b>{couponCount}</b>장
            </div>
          </S.UserPoint>
          <S.UserPoint>
            <div>적립금</div>
            <div className="text-bold">
              <b>{kstFormatter(mileage)}</b>
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

      {isEditProfileModalOpen && (
        <EditProfileModal closeForm={closeEditProfileModal} confirm={confirmEditProfile} />
      )}
    </S.Intro>
  );
}
