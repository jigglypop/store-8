import { ReactElement } from 'react';
import * as S from './style';
import { SHOW_COUPON_TEXT, SHOW_COUPON_DETAIL } from '@constants/Cart';
import Modal from '@client/components/common/Modal/Modal';
import type { CouponData } from '@middle/type/coupon/coupon';
import Coupon from '@components/Order/AccountInfo/Coupon/Coupon'; // Coupon Element

interface CouponModalProps {
  closeForm: () => void;
  coupon: CouponData[];
}

function CouponModal(props: CouponModalProps): ReactElement {
  return (
    <Modal closeModal={props.closeForm}>
      <S.CouponModal>
        <div>
          <p className="coupon-modal-title">{SHOW_COUPON_TEXT}</p>
          <p className="coupon-modal-info">{SHOW_COUPON_DETAIL}</p>
          <div className="coupon-container">
            {props.coupon.map((element, index) => {
              const { amount, title, dDay, isUsed } = element;
              const isUsedCoupon = isUsed ? 'used-coupon' : '';
              return (
                <div key={index} className={'coupon-div ' + isUsedCoupon}>
                  <Coupon title={title} amount={amount} dDay={dDay} selected={false}></Coupon>
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'뒤로가기'}
          </button>
        </div>
      </S.CouponModal>
    </Modal>
  );
}

export default CouponModal;
