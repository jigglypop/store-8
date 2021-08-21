import { ReactElement, useState } from 'react';
import checkBad from '@image/check-bad.png';
import checkGood from '@image/check-good.png';
import exclamRed from '@image/exclam-red.png';
import { getDaumAddress } from '@lib/daumAddress';
import type { AddressResult } from '@lib/daumAddress';
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
import * as S from './style';

const UserInfo = (): ReactElement => {
  const [nameCheck, setNameCheck] = useState(0);
  const [callCheck, setCallCheck] = useState(0);
  const [emailCheck, setEmailCheck] = useState(0);
  const [addressInfo, setAddressInfo] = useState({
    address: '',
    zoneCode: '',
    extraEdit: true,
  });

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

  const getCheckIcon = (checkType: number): ReactElement => {
    if (checkType === 0) {
      return <></>;
    } else if (checkType === 1) {
      return <img src={checkBad} />;
    } else {
      return <img src={checkGood} />;
    }
  };

  const getAlertText = (checkType: number, alertString: string): ReactElement => {
    if (checkType === 0) {
      return <div className="alert-placeholder"></div>;
    } else if (checkType === 1) {
      return (
        <div className="input-form-alert">
          <img src={exclamRed} />
          <p>{alertString}</p>
        </div>
      );
    } else {
      return <div className="alert-placeholder"></div>;
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
      <div className="input-form-container">
        <p className="input-form-label">{INPUT_NAME_TITLE}</p>
        <div className="input-form">
          <input
            className={nameCheck === 1 ? 'alert-input' : 'plain-input'}
            placeholder={INPUT_NAME_PLACEHOLDER}
            onChange={(e) => {
              setNameCheck(checkNameString(e.target.value));
            }}
          />
          {getCheckIcon(nameCheck)}
        </div>
        {getAlertText(nameCheck, INPUT_NAME_ALERT)}
      </div>
      <div className="input-form-container">
        <p className="input-form-label">{INPUT_CALL_TITLE}</p>
        <div className="input-form">
          <input
            className={callCheck === 1 ? 'alert-input' : 'plain-input'}
            placeholder={INPUT_CALL_PLACEHOLDER}
            onChange={(e) => {
              setCallCheck(checkCallString(e.target.value));
            }}
          />
          {getCheckIcon(callCheck)}
        </div>
        {getAlertText(callCheck, INPUT_CALL_ALERT)}
      </div>
      <div className="input-form-container">
        <p className="input-form-label">{INPUT_EMAIL_TITLE}</p>
        <div className="input-form">
          <input
            className={emailCheck === 1 ? 'alert-input' : 'plain-input'}
            placeholder={INPUT_EMAIL_PLACEHOLDER}
            onChange={(e) => {
              setEmailCheck(checkEmailString(e.target.value));
            }}
          />
          {getCheckIcon(emailCheck)}
        </div>
        {getAlertText(emailCheck, INPUT_EMAIL_ALERT)}
      </div>
      <div className="address-form-container">
        <p className="input-form-label">{'배송지 선택'}</p>
        <div className="address-search-container">
          <input placeholder="우편번호" value={addressInfo.zoneCode} disabled />
          <button onClick={getAddress}>{'우편번호 찾기'}</button>
        </div>
        <input value={addressInfo.address} placeholder="주소" disabled />
        <input placeholder="상세주소" disabled={addressInfo.extraEdit} />
      </div>
    </S.UserInfo>
  );
};

export default UserInfo;
