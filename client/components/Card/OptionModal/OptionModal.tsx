import { ReactElement, useState } from 'react';
import * as S from './style';
import { CHOOSE_OPTION_TEXT } from '@constants/Order';
import Modal from '@client/components/common/Modal/Modal';
import type { AddressData } from '@middle/type/address/address';
import Address from './Option'; // Address Element

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import { getAddress } from '@store/address/address';
import { useEffect } from 'react';

interface OptionModalProps {
  closeForm: () => void;
  confirm: (optionId: number | null, count: number) => void;
}

function AddressModal(props: OptionModalProps): ReactElement {
  return (
    <Modal closeModal={props.closeForm}>
      <S.OptionModal>
        <div>
          <p className="option-modal-title">{CHOOSE_OPTION_TEXT}</p>
          <div className="option-container"></div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'취소'}
          </button>
          <button onClick={() => props.confirm(2, 0)} className="submit-btn">
            {'선택'}
          </button>
        </div>
      </S.OptionModal>
    </Modal>
  );
}

export default AddressModal;
