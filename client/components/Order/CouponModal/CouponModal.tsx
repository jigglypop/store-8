import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { CHOOSE_COUPON_TEXT } from '@constants/Cart';
import { RootState } from '@client/store';
import Modal from '@client/components/common/Modal/Modal';
import type { CouponData } from '@middle/type/Coupon/coupon';
import Coupon from '../AccountInfo/Coupon/Coupon'; // Coupon Element
import { getCoupon } from '@store/coupon/coupon';
import { useEffect } from 'react';

interface CouponModalProps {
  closeForm: () => void;
  confirm: (couponData: CouponData) => void;
}

function CouponModal(props: CouponModalProps): ReactElement {
  const [selected, setSelected] = useState(-1);
  const { coupon } = useSelector((state: RootState) => state.coupon);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO : User ID 빼기
    dispatch(getCoupon({ userId: 1 }));
  }, []);

  return (
    <Modal closeModal={props.closeForm}>
      <S.CouponModal>
        <div>
          <p className="coupon-modal-title">{CHOOSE_COUPON_TEXT}</p>
          <div className="coupon-container">
            {coupon.map((element, index) => {
              const { amount, title, dDay } = element;
              return (
                <div key={index} className="coupon-div" onClick={() => setSelected(index)}>
                  <Coupon
                    title={title}
                    amount={amount}
                    dDay={dDay}
                    selected={selected === index}
                  ></Coupon>
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'취소'}
          </button>
          <button onClick={() => props.confirm(coupon[selected])} className="submit-btn">
            {'선택'}
          </button>
        </div>
      </S.CouponModal>
    </Modal>
  );
}

export default CouponModal;
