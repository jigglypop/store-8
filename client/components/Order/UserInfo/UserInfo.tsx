import { ReactElement, useState, useEffect } from 'react';
import { getDaumAddress } from '@lib/daumAddress';
import { checkCallString, checkEmailString, checkNameString } from '@utils/inputTypeChecker';
import AlertInput from '@components/common/AlertInput/AlertInput';
import checked from '@image/checked.png';
import unchecked from '@image/unchecked.png';
import { ProceedOrderProps } from '@middle/type/product/order';

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
import cache from '@client/utils/cache';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import * as addressStore from '@store/address/address';

interface UserInfoProps {
  totalState: ProceedOrderProps;
  setTotalState: (props: ProceedOrderProps) => void;
  openForm: () => void;
}

const UserInfo = ({ totalState, setTotalState, openForm }: UserInfoProps): ReactElement => {
  const { address } = useSelector((state: RootState) => state.address);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cache.get('token')) {
      // TODO: Redirect to main. 혹은 메인으로 가는 모달을 띄워주기
    }
    dispatch(addressStore.getAddress(cache.get('token')));
  }, []);

  const [nameCheck, setNameCheck] = useState(0);
  const [callCheck, setCallCheck] = useState(0);
  const [emailCheck, setEmailCheck] = useState(0);
  const [extraEdit, setExtraEdit] = useState(false);

  useEffect(() => {
    setExtraEdit(totalState.addressInfo.zonecode === '');
    setNameCheck(checkNameString(totalState.addressInfo.name));
    setCallCheck(checkCallString(totalState.addressInfo.call));
    setEmailCheck(checkEmailString(totalState.addressInfo.email));
  }, [totalState.addressInfo]);

  // 만약 isBase 된 것이 있다면 원래 데이터를 넣어주기
  useEffect(() => {
    address.forEach((element) => {
      if (element.isBase) {
        setTotalState({ ...totalState, addressInfo: element, isBase: element.isBase });
      }
    });
  }, [address]);

  const setName = (name: string) => {
    setTotalState({ ...totalState, addressInfo: { ...totalState.addressInfo, name } });
  };

  const setEmail = (email: string) => {
    setTotalState({ ...totalState, addressInfo: { ...totalState.addressInfo, email } });
  };

  const setCall = (call: string) => {
    setTotalState({ ...totalState, addressInfo: { ...totalState.addressInfo, call } });
  };

  const setExtraAddress = (extraAddress: string) => {
    setTotalState({ ...totalState, addressInfo: { ...totalState.addressInfo, extraAddress } });
  };

  const setIsBase = (isBase: boolean) => {
    setTotalState({ ...totalState, isBase });
  };

  const setAddressInfo = (address: string, zonecode: string) => {
    setTotalState({ ...totalState, addressInfo: { ...totalState.addressInfo, address, zonecode } });
  };

  const getAddress = () => {
    getDaumAddress(({ address, zoneCode }) => {
      // 상세주소로 focuse 필요
      setAddressInfo(address, zoneCode);
      setExtraEdit(false);
    });
  };

  return (
    <S.UserInfo>
      <div className="user-info-title">
        <p>{USER_ORDER_LIST}</p>
        <button onClick={openForm} className="center-align">
          {'내 배송지 보기'}
        </button>
      </div>
      <AlertInput
        name="name-input"
        labelText={INPUT_NAME_TITLE}
        placeholder={INPUT_NAME_PLACEHOLDER}
        value={totalState.addressInfo.name}
        alertText={INPUT_NAME_ALERT}
        alertCheck={setNameCheck}
        stringChecker={checkNameString}
        setValue={setName}
        isAlert={nameCheck}
      />
      <AlertInput
        name="call-input"
        labelText={INPUT_CALL_TITLE}
        placeholder={INPUT_CALL_PLACEHOLDER}
        value={totalState.addressInfo.call}
        alertText={INPUT_CALL_ALERT}
        alertCheck={setCallCheck}
        stringChecker={checkCallString}
        setValue={setCall}
        isAlert={callCheck}
      />
      <AlertInput
        name="email-input"
        labelText={INPUT_EMAIL_TITLE}
        placeholder={INPUT_EMAIL_PLACEHOLDER}
        value={totalState.addressInfo.email}
        alertText={INPUT_EMAIL_ALERT}
        alertCheck={setEmailCheck}
        stringChecker={checkEmailString}
        setValue={setEmail}
        isAlert={emailCheck}
      />
      <div className="address-form-container">
        <p className="input-form-label">{'배송지 선택'}</p>
        <div className="address-search-container">
          <input
            className="zonecode-input"
            placeholder="우편번호"
            value={totalState.addressInfo.zonecode}
            disabled
          />
          <button onClick={getAddress}>{'우편번호 찾기'}</button>
        </div>
        <input value={totalState.addressInfo.address} placeholder="주소" disabled />
        <div className="detail-address-page">
          {extraEdit ? (
            <input
              value={totalState.addressInfo.extraAddress}
              placeholder="상세주소"
              disabled
              onChange={(e) => setExtraAddress(e.target.value)}
            />
          ) : (
            <input
              value={totalState.addressInfo.extraAddress}
              placeholder="상세주소"
              onChange={(e) => setExtraAddress(e.target.value)}
            />
          )}

          <div className="set-base-section" onClick={() => setIsBase(!totalState.isBase)}>
            <img src={totalState.isBase ? checked : unchecked} />
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
