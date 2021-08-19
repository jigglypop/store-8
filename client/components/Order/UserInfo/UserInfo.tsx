import { ReactElement, useState } from 'react';
import checkBad from '@image/check-bad.png';
import checkGood from '@image/check-good.png';
import exclamRed from '@image/exclam-red.png';
import * as S from './style';

const UserInfo = (): ReactElement => {
  const [nameCheck, setNameCheck] = useState(0);
  const [callCheck, setCallCheck] = useState(0);
  const [emailCheck, setEmailCheck] = useState(0);

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

  return (
    <S.UserInfo>
      <div className="input-form-container">
        <p className="input-form-label">{'주문 하시는 분'}</p>
        <div className="input-form">
          <input
            className={nameCheck === 1 ? 'alert-input' : 'plain-input'}
            placeholder="주문하시는 분의 성함을 입력해주세요."
            onChange={(e) => {
              setNameCheck(checkNameString(e.target.value));
            }}
          />
          {getCheckIcon(nameCheck)}
        </div>
        {getAlertText(nameCheck, '성함은 필수로 입력해주세요!')}
      </div>
      <div className="input-form-container">
        <p className="input-form-label">{'휴대폰 번호'}</p>
        <div className="input-form">
          <input
            className={callCheck === 1 ? 'alert-input' : 'plain-input'}
            placeholder="연락을 받을 번호를 입력해주세요."
            onChange={(e) => {
              setCallCheck(checkCallString(e.target.value));
            }}
          />
          {getCheckIcon(callCheck)}
        </div>
        {getAlertText(callCheck, '-를 포함한 전화번호의 형태로 입력해 주세요!')}
      </div>
      <div className="input-form-container">
        <p className="input-form-label">{'이메일'}</p>
        <div className="input-form">
          <input
            className={emailCheck === 1 ? 'alert-input' : 'plain-input'}
            placeholder="연락을 받을 이메일을 입력해주세요."
            onChange={(e) => {
              setEmailCheck(checkEmailString(e.target.value));
            }}
          />
          {getCheckIcon(emailCheck)}
        </div>
        {getAlertText(emailCheck, '이메일 형식을 지켜주세요!')}
      </div>
    </S.UserInfo>
  );
};

export default UserInfo;
