import { ReactElement, useState } from 'react';
import * as S from './style';

import checkBad from '@image/check-bad.png';
import checkGood from '@image/check-good.png';
import exclamRed from '@image/exclam-red.png';

interface AlertInputProps {
  labelText: string;
  placeholder: string;
  alertText: string;
  alertCheck: (alertState: number) => void;
  stringChecker: (inputValue: string) => number;
  isAlert: number; // 0 default, 1 alert, 2 ok
}

const AlertInput = (props: AlertInputProps): ReactElement => {
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
    <S.AlertInput>
      <p className="input-form-label">{props.labelText}</p>
      <div className="input-form">
        <input
          className={props.isAlert === 1 ? 'alert-input' : 'plain-input'}
          placeholder={props.placeholder}
          onChange={(e) => {
            props.alertCheck(props.stringChecker(e.target.value));
          }}
        />
        {getCheckIcon(props.isAlert)}
      </div>
      {getAlertText(props.isAlert, props.alertText)}
    </S.AlertInput>
  );
};

export default AlertInput;
