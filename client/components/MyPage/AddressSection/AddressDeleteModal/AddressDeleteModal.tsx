import { ReactElement } from 'react';
import * as S from './style';
import Modal from '@client/components/common/Modal/Modal';
import { AddressData } from '@middle/type/address/address';
import { useOrder } from '@client/hooks/order/order';

interface AddressDeleteModalProps {
  closeForm: () => void;
  onConfirm: () => void;
  addressData: AddressData;
}

function AddressDeleteModal(props: AddressDeleteModalProps): ReactElement {
  const { removeAddress } = useOrder();

  const onDelete = async () => {
    await removeAddress(props.addressData.addressId);
    props.onConfirm();
    props.closeForm();
  };

  return (
    <Modal closeModal={props.closeForm}>
      <S.AddressDeleteModal>
        <div>
          <p className="address-modal-title">{'다음 주소가 삭제됩니다.'}</p>
          <p className="address-modal-info">{`[${props.addressData.title}] - ${props.addressData.address} ${props.addressData.extraAddress} `}</p>
          <p className="address-modal-info">{`[받는 사람] : ${props.addressData.name} ( ${props.addressData.call} )`}</p>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'취소'}
          </button>
          <button onClick={onDelete} className="remove-btn">
            {'삭제하기'}
          </button>
        </div>
      </S.AddressDeleteModal>
    </Modal>
  );
}

export default AddressDeleteModal;
