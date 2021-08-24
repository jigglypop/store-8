import { ReactElement, useState } from 'react';
import * as S from './style';
import Modal from '@client/components/common/Modal/Modal';
import { getDaumAddress } from '@lib/daumAddress';
import { checkCallString, checkEmailString, checkNameString } from '@utils/inputTypeChecker';
import AlertInput from '@components/common/AlertInput/AlertInput';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';

import {
  INPUT_NAME_PLACEHOLDER,
  INPUT_CALL_PLACEHOLDER,
  INPUT_EMAIL_PLACEHOLDER,
  INPUT_NAME_ALERT,
  INPUT_CALL_ALERT,
  INPUT_EMAIL_ALERT,
  INPUT_NAME_TITLE,
  INPUT_CALL_TITLE,
  INPUT_EMAIL_TITLE,
} from '@constants/Order';
import { useOrder } from '@client/hooks/order/order';

interface AddressAddModalProps {
  closeForm: () => void;
  onAddConfirm: () => void;
}

function AddressAddModal(props: AddressAddModalProps): ReactElement {
  const { makeAddress } = useOrder();
  const [addressData, setAddressData] = useState({
    address: '',
    extraAddress: '',
    zonecode: '',
    call: '',
    name: '',
    email: '',
    isBase: false,
    title: '',
  });

  const [title, setTitle] = useState('');
  const [nameCheck, setNameCheck] = useState(0);
  const [callCheck, setCallCheck] = useState(0);
  const [emailCheck, setEmailCheck] = useState(0);
  const [extraEdit, setExtraEdit] = useState(false);

  const setName = (name: string) => {
    setAddressData({ ...addressData, name });
  };

  const setEmail = (email: string) => {
    setAddressData({ ...addressData, email });
  };

  const setCall = (call: string) => {
    setAddressData({ ...addressData, call });
  };

  const setExtraAddress = (extraAddress: string) => {
    setAddressData({ ...addressData, extraAddress });
  };

  const getAddress = () => {
    getDaumAddress(({ address, zoneCode }) => {
      // 상세주소로 focuse 필요
      setAddressData({ ...addressData, address, zonecode: zoneCode });
      setExtraEdit(false);
    });
  };

  const setIsBase = (isBase: boolean) => {
    setAddressData({ ...addressData, isBase });
  };

  const createAddress = async () => {
    // TODO: userId 1 지우기
    if (checkNameString(addressData.name) !== 2) {
      setNameCheck(1);
    } else if (checkCallString(addressData.call) !== 2) {
      setCallCheck(1);
    } else if (checkEmailString(addressData.email) !== 2) {
      setEmailCheck(1);
    } else if (addressData.zonecode === '') {
      getAddress();
    } else {
      await makeAddress(
        {
          userId: 1,
          location: addressData.address,
          zonecode: addressData.zonecode,
          extraLocation: addressData.extraAddress,
          receiver: addressData.name,
          call: addressData.call,
          email: addressData.email,
          title: title,
        },
        addressData.isBase
      );
      props.onAddConfirm();
      props.closeForm();
    }
  };

  return (
    <Modal closeModal={props.closeForm}>
      <S.AddressAddModal>
        <div>
          <p className="address-modal-title">{'추가할 배송지 정보를 입력하세요.'}</p>
          <div className="address-container"></div>
        </div>
        <div className="title-section">
          <p>{'추가할 배송지의 이름을 적어주세요.'}</p>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="배송지 이름을 작성해주세요."
          />
        </div>
        <AlertInput
          name="name-input"
          labelText={INPUT_NAME_TITLE}
          placeholder={INPUT_NAME_PLACEHOLDER}
          value={addressData.name}
          alertText={INPUT_NAME_ALERT}
          alertCheck={setNameCheck}
          stringChecker={checkNameString}
          setValue={setName}
          isAlert={nameCheck}
          denseInput={true}
        />
        <AlertInput
          name="call-input"
          labelText={INPUT_CALL_TITLE}
          placeholder={INPUT_CALL_PLACEHOLDER}
          value={addressData.call}
          alertText={INPUT_CALL_ALERT}
          alertCheck={setCallCheck}
          stringChecker={checkCallString}
          setValue={setCall}
          isAlert={callCheck}
          denseInput={true}
        />
        <AlertInput
          name="email-input"
          labelText={INPUT_EMAIL_TITLE}
          placeholder={INPUT_EMAIL_PLACEHOLDER}
          value={addressData.email}
          alertText={INPUT_EMAIL_ALERT}
          alertCheck={setEmailCheck}
          stringChecker={checkEmailString}
          setValue={setEmail}
          isAlert={emailCheck}
          denseInput={true}
        />
        <div className="address-form-container">
          <p className="input-form-label">{'배송지 선택'}</p>
          <div className="address-search-container">
            <input
              className="zonecode-input"
              placeholder="우편번호"
              value={addressData.zonecode}
              disabled
            />
            <button onClick={getAddress}>{'우편번호 찾기'}</button>
          </div>
          <input value={addressData.address} placeholder="주소" disabled />
          <div className="detail-address-page">
            {extraEdit ? (
              <input
                value={addressData.extraAddress}
                placeholder="상세주소"
                disabled
                onChange={(e) => setExtraAddress(e.target.value)}
              />
            ) : (
              <input
                value={addressData.extraAddress}
                placeholder="상세주소"
                onChange={(e) => setExtraAddress(e.target.value)}
              />
            )}

            <div className="set-base-section" onClick={() => setIsBase(!addressData.isBase)}>
              <img src={addressData.isBase ? checked : unchecked} />
              <div>
                <p>{'기본 배송지로 설정'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'뒤로가기'}
          </button>
          <button onClick={createAddress} className="submit-btn">
            {'추가하기'}
          </button>
        </div>
      </S.AddressAddModal>
    </Modal>
  );
}

export default AddressAddModal;
