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
import cache from '@client/utils/cache';

import PenSvg from '@image/svg/pen.svg';
import { EditProfileModal } from '@components/MyPage/EditProfileModal/EditProfileModal';

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

  // TODO : 이 부분도 페이지가 바뀔 때 마다 쿠폰을 로딩하는데, 어떤 페이지로 들어와도 쿠폰을 한번은 로딩을 해야해서 그대로 둡니다.
  useEffect(() => {
    dispatch(getCoupon(cache.get('token')));
    getUsableMileage();
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

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    console.log('취소');
    setIsEditProfileModalOpen(false);
  };

  const confirmEditProfile = () => {
    console.log('확인');
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
              console.log('click!');
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

      {isEditProfileModalOpen && (
        <EditProfileModal closeForm={closeEditProfileModal} confirm={confirmEditProfile} />
      )}
    </S.Intro>
  );
}
