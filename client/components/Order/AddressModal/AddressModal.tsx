import { ReactElement, useState } from 'react';
import * as S from './style';
import { CHOOSE_ADRESS_TEXT } from '@constants/Order';
import Modal from '@client/components/common/Modal/Modal';
import type { AddressData } from '@middle/type/address/address';
import Address from './Address'; // Address Element

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import { getAddress } from '@store/address/address';
import { useEffect } from 'react';

interface AddressModalProps {
  closeForm: () => void;
  confirm: (addressData: AddressData) => void;
}

function AddressModal(props: AddressModalProps): ReactElement {
  const [selected, setSelected] = useState(-1);
  const { address } = useSelector((state: RootState) => state.address);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO : User ID 빼기
    dispatch(getAddress({ userId: 1 }));
  }, []);

  return (
    <Modal closeModal={props.closeForm}>
      <S.AddressModal>
        <div>
          <p className="address-modal-title">{CHOOSE_ADRESS_TEXT}</p>
          <div className="address-container">
            {address.map((element, index) => {
              return (
                <div key={index} className="address-div" onClick={() => setSelected(index)}>
                  <Address selected={index === selected} addressData={element} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'취소'}
          </button>
          <button onClick={() => props.confirm(address[selected])} className="submit-btn">
            {'선택'}
          </button>
        </div>
      </S.AddressModal>
    </Modal>
  );
}

export default AddressModal;
