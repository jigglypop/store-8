import { ReactElement } from 'react';
import * as S from './style';
import { SHOW_COUPON_TEXT, SHOW_COUPON_DETAIL } from '@constants/Cart';
import Modal from '@client/components/common/Modal/Modal';
import type { CouponData } from '@middle/type/Coupon/coupon';
import Coupon from '@components/Order/AccountInfo/Coupon/Coupon'; // Coupon Element

interface AddressAddModalProps {
  closeForm: () => void;
}

function AddressAddModal(props: AddressAddModalProps): ReactElement {
  return (
    <Modal closeModal={props.closeForm}>
      <S.AddressAddModal>
        <div>
          <p className="coupon-modal-title">{SHOW_COUPON_TEXT}</p>
          <p className="coupon-modal-info">{SHOW_COUPON_DETAIL}</p>
          <div className="coupon-container"></div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'뒤로가기'}
          </button>
        </div>
      </S.AddressAddModal>
    </Modal>
  );
}

export default AddressAddModal;
