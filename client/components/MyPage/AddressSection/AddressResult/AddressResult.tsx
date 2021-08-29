import { ReactElement } from 'react';
import * as S from './style';

import { Desktop, Tablet, Mobile } from '@components/common/ResponseComp/ResponseComp';

import { AddressData } from '@middle/type/address/address';
import unchecked from '@image/unchecked.png';
import checked from '@image/checked.png';

interface AddressInfo {
  address: AddressData;
  index: number;
  openDeleteModal: () => void;
  openModifyModal: () => void;
  setModifyAddressIndex: (index: number) => void;
}

export default function AddressResult(props: AddressInfo): ReactElement {
  const baseItem = () => {
    return (
      <>
        <div className="base-check-section center-align">
          <img src={props.address.isBase ? checked : unchecked} />
        </div>
        <div className="address-name-section center-align">
          <p className="content-text ">{props.address.title}</p>
        </div>
        <div className="address-location-section center-align">
          <p className="content-text content-main-text">{`[${props.address.zonecode}] ${props.address.address}`}</p>
          <p className="content-text">{props.address.extraAddress}</p>
        </div>
        <div className="address-receiver-section center-align">
          <p className="content-text">{props.address.name}</p>
        </div>
        <div className="address-call-section center-align">
          <p className="content-text content-main-text">{props.address.call}</p>
          <p className="content-text">{props.address.email}</p>
        </div>
        <div className="address-modify-section center-align">
          <button
            onClick={() => {
              props.setModifyAddressIndex(props.index);
              props.openModifyModal();
            }}
            className="content-text modify-button"
          >
            {'수정'}
          </button>
          <button
            onClick={() => {
              props.setModifyAddressIndex(props.index);
              props.openDeleteModal();
            }}
            className="content-text remove-button"
          >
            {'삭제'}
          </button>
        </div>
      </>
    );
  };

  const mobileItem = () => {
    return (
      <div className="mobile-container">
        <div className="mobile-content-row">
          <img src={props.address.isBase ? checked : unchecked} />
          <p className="content-text ">{props.address.title}</p>
        </div>
        <div className="mobile-address-content-container">
          <p className="content-text content-main-text">{`[${props.address.zonecode}] ${props.address.address}`}</p>
          <p className="content-text">{props.address.extraAddress}</p>
        </div>
        <div className="mobile-receiver-content-container">
          <p className="content-text">{'수신인 : ' + props.address.name}</p>
          <p className="content-text content-main-text">{props.address.call}</p>
        </div>
        <div className="mobile-address-modify-section">
          <button
            onClick={() => {
              props.setModifyAddressIndex(props.index);
              props.openModifyModal();
            }}
            className="content-text modify-button"
          >
            {'수정'}
          </button>
          <button
            onClick={() => {
              props.setModifyAddressIndex(props.index);
              props.openDeleteModal();
            }}
            className="content-text remove-button"
          >
            {'삭제'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <S.AddressResult>
      <Desktop>{baseItem()}</Desktop>
      <Tablet>{baseItem()}</Tablet>
      <Mobile>{mobileItem()}</Mobile>
    </S.AddressResult>
  );
}
