import { ReactElement } from 'react';
import { AddressData } from '@middle/type/address/address';
import unchecked from '@image/unchecked.png';
import checked from '@image/checked.png';
import * as S from './style';

interface AddressInfo {
  address: AddressData;
}

export default function AddressResult({ address }: AddressInfo): ReactElement {
  return (
    <S.AddressResult>
      <div className="base-check-section center-align">
        <img src={address.isBase ? checked : unchecked} />
      </div>
      <div className="address-name-section center-align">
        <p className="content-text ">{address.title}</p>
      </div>
      <div className="address-location-section center-align">
        <p className="content-text content-main-text">{`[${address.zonecode}] ${address.address}`}</p>
        <p className="content-text">{address.extraAddress}</p>
      </div>
      <div className="address-receiver-section center-align">
        <p className="content-text">{address.name}</p>
      </div>
      <div className="address-call-section center-align">
        <p className="content-text content-main-text">{address.call}</p>
        <p className="content-text">{address.email}</p>
      </div>
      <div className="address-modify-section center-align">
        <button className="content-text modify-button">{'수정'}</button>
        <button className="content-text remove-button">{'삭제'}</button>
      </div>
    </S.AddressResult>
  );
}
