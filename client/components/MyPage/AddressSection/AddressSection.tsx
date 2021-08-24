import { ReactElement } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import AddressResult from './AddressResult/AddressResult';
import numUp from '@image/numUp.png';

import { getAddress } from '@client/store/address/address';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';

export default function AddressSection(): ReactElement {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.address.address);

  useEffect(() => {
    dispatch(getAddress({ userId: 1 }));
  }, []);

  return (
    <S.AddressSection>
      <Intro />
      <div className="address-header">
        <div className="base-check-section title-text center-align">
          <p>{'기본 배송지'}</p>
        </div>
        <div className="address-name-section title-text center-align">
          <p>{'배송지 이름'}</p>
        </div>
        <div className="address-location-section title-text center-align">
          <p>{'배송지 주소'}</p>
        </div>
        <div className="address-receiver-section title-text center-align">
          <p>{'받는 사람'}</p>
        </div>
        <div className="address-call-section title-text center-align">
          <p>{'연락처'}</p>
        </div>
        <div className="address-modify-section title-text center-align">
          <p>{'수정 / 삭제'}</p>
        </div>
      </div>
      <div>
        {address.map((element, index) => {
          return <AddressResult key={index} address={element} />;
        })}
      </div>
      <div className="add-address">
        <img src={numUp} />
        <p>{'배송지 추가하기'}</p>
      </div>
    </S.AddressSection>
  );
}
