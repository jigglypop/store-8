import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { CHOOSE_COUPON_TEXT } from '@constants/Cart';
import Modal from '@client/components/common/Modal/Modal';
import type { CouponData } from '@middle/type/Coupon/coupon';
import Coupon from '../AccountInfo/Coupon/Coupon';

const tempCoupons: CouponData[] = [
  { title: '안녕 감사쿠폰', amount: 3000, dDay: '2021.08.21' },
  { title: '안감사쿠폰', amount: 1000, dDay: '2021.08.31' },
  { title: '쿠폰 이름 없다', amount: 2000, dDay: '2021.09.01' },
  { title: '쿺', amount: 7000, dDay: '2021.09.21' },
  { title: '상당히 많이 길게 작성된 쿠폰 이름', amount: 5000, dDay: '2022.08.11' },
];

interface CouponModalProps {
  closeForm: () => void;
  confirm: (couponData: CouponData) => void;
}

function CouponModal(props: CouponModalProps): ReactElement {
  const [selected, setSelected] = useState(-1);
  return (
    <Modal closeModal={props.closeForm}>
      <S.CouponModal>
        <div>
          <p className="coupon-modal-title">{CHOOSE_COUPON_TEXT}</p>
          <div className="coupon-container">
            {tempCoupons.map((coupon, index) => {
              const { amount, title, dDay } = coupon;
              return (
                <div className="coupon-div" onClick={() => setSelected(index)}>
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
          <button onClick={() => props.confirm(tempCoupons[selected])} className="submit-btn">
            {'선택'}
          </button>
        </div>
      </S.CouponModal>
    </Modal>
  );
}

export default CouponModal;
