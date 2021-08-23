import { ReactElement, useState, useEffect } from 'react';
import { getDaumAddress } from '@lib/daumAddress';
import AlertInput from '@components/common/AlertInput/AlertInput';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';
import type { AddressData } from '@middle/type/address/address';

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
  USER_ORDER_LIST,
} from '@constants/Order';
import * as S from './style';

interface UserInfoProps {
  openForm: () => void;
  selectedAddress: AddressData;
}

const UserInfo = ({ openForm, selectedAddress }: UserInfoProps): ReactElement => {
  const [nameCheck, setNameCheck] = useState(0);
  const [name, setName] = useState('');
  const [callCheck, setCallCheck] = useState(0);
  const [call, setCall] = useState('');
  const [emailCheck, setEmailCheck] = useState(0);
  const [extraAddress, setExtraAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isBase, setIsBase] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    address: selectedAddress.address,
    zoneCode: selectedAddress.zonecode,
    extraEdit: true,
  });

  useEffect(() => {
    setAddressInfo({
      address: selectedAddress.address,
      zoneCode: selectedAddress.zonecode,
      extraEdit: selectedAddress.zonecode === '',
    });
    setExtraAddress(selectedAddress.extraAddress);
    setName(selectedAddress.name);
    setNameCheck(checkNameString(selectedAddress.name));
    setCall(selectedAddress.call);
    setCallCheck(checkCallString(selectedAddress.call));
    setEmail(selectedAddress.email);
    setEmailCheck(checkEmailString(selectedAddress.email));
  }, [selectedAddress]);

  const checkNameString = (nameString: string): number => {
    if (nameString.length === 0) return 0;
    else if (nameString.length > 6) return 1;
    else return 2;
  };

  const checkCallString = (callString: string): number => {
    let checkReg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    if (callString.length === 0) return 0;
    else {
      return checkReg.test(callString) ? 2 : 1;
    }
  };

  const checkEmailString = (emailString: string): number => {
    let checkReg =
      /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;
    if (emailString.length === 0) return 0;
    else {
      return checkReg.test(emailString) ? 2 : 1;
    }
  };

  const getAddress = () => {
    getDaumAddress(({ address, zoneCode }) => {
      // 상세주소로 focuse 필요
      setAddressInfo({ address, zoneCode, extraEdit: false });
    });
  };

  return (
    <S.UserInfo>
      <div className="user-info-title">
        <p>{USER_ORDER_LIST}</p>
        <button onClick={openForm} className="center-align">
          {'기존 배송지에서 선택'}
        </button>
      </div>
      <AlertInput
        labelText={INPUT_NAME_TITLE}
        placeholder={INPUT_NAME_PLACEHOLDER}
        value={name}
        alertText={INPUT_NAME_ALERT}
        alertCheck={setNameCheck}
        stringChecker={checkNameString}
        setValue={setName}
        isAlert={nameCheck}
      />
      <AlertInput
        labelText={INPUT_CALL_TITLE}
        placeholder={INPUT_CALL_PLACEHOLDER}
        value={call}
        alertText={INPUT_CALL_ALERT}
        alertCheck={setCallCheck}
        stringChecker={checkCallString}
        setValue={setCall}
        isAlert={callCheck}
      />
      <AlertInput
        labelText={INPUT_EMAIL_TITLE}
        placeholder={INPUT_EMAIL_PLACEHOLDER}
        value={email}
        alertText={INPUT_EMAIL_ALERT}
        alertCheck={setEmailCheck}
        stringChecker={checkEmailString}
        setValue={setEmail}
        isAlert={emailCheck}
      />
      <div className="address-form-container">
        <p className="input-form-label">{'배송지 선택'}</p>
        <div className="address-search-container">
          <input placeholder="우편번호" value={addressInfo.zoneCode} disabled />
          <button onClick={getAddress}>{'우편번호 찾기'}</button>
        </div>
        <input value={addressInfo.address} placeholder="주소" disabled />
        <div className="detail-address-page">
          {addressInfo.extraEdit ? (
            <input
              value={extraAddress}
              placeholder="상세주소"
              disabled
              onChange={(e) => setExtraAddress(e.target.value)}
            />
          ) : (
            <input
              value={extraAddress}
              placeholder="상세주소"
              onChange={(e) => setExtraAddress(e.target.value)}
            />
          )}

          <div className="set-base-section">
            <img onClick={() => setIsBase(!isBase)} src={isBase ? checked : unchecked} />
            <div>
              <p>{'기본 배송지로 설정'}</p>
            </div>
          </div>
        </div>
      </div>
    </S.UserInfo>
  );
};

export default UserInfo;
