import { ReactElement } from 'react';
import * as S from './style';
import { CHOOSE_COUPON_TEXT } from '@constants/Cart';
import Modal from '@client/components/common/Modal/Modal';
import type { CouponData } from '@middle/type/Coupon/coupon';
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
          <p className="coupon-modal-title">{CHOOSE_COUPON_TEXT}</p>
          <div className="coupon-container">
            {props.coupon.map((element, index) => {
              const { amount, title, dDay, isUsed } = element;
              if (!isUsed) {
                return (
                  <div key={index} className="coupon-div">
                    <Coupon title={title} amount={amount} dDay={dDay} selected={false}></Coupon>
                  </div>
                );
              }
              return <></>;
            })}
          </div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'취소'}
          </button>
        </div>
      </S.CouponModal>
    </Modal>
  );
}

export default CouponModal;
