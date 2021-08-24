import { ReactElement } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import AddressResult from './AddressResult/AddressResult';
import AddressAddModal from './AddressAddModal/AddressAddModal';
import AddressDeleteModal from './AddressDeleteModal/AddressDeleteModal';
import AddressModifyModal from './AddressModifyModal/AddressModifyModal';
import numUp from '@image/numUp.png';

import { getAddress } from '@client/store/address/address';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AddressSection(): ReactElement {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.address.address);
  const [isDeleteModalFocused, setDeleteModalFocused] = useState(false);
  const [isModifyModalFocused, setModifyModalFocused] = useState(false);
  const [isAddModalFocused, setAddModalFocused] = useState(false);

  useEffect(() => {
    dispatch(getAddress({ userId: 1 }));
  }, []);

  const closeDeleteModal = () => {
    setDeleteModalFocused(false);
  };

  const openDeleteModal = () => {
    setDeleteModalFocused(true);
  };

  const closeModifyModal = () => {
    setModifyModalFocused(false);
  };

  const openModifyModal = () => {
    setModifyModalFocused(true);
  };

  const closeAddModal = () => {
    setAddModalFocused(false);
  };

  const openAddModal = () => {
    setAddModalFocused(true);
  };

  const onAddConfirm = () => {
    dispatch(getAddress({ userId: 1 }));
  };

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
          return (
            <AddressResult
              openModifyModal={openModifyModal}
              openDeleteModal={openDeleteModal}
              key={index}
              address={element}
            />
          );
        })}
      </div>
      <div className="add-address">
        <img src={numUp} onClick={openAddModal} />
        <p onClick={openAddModal}>{'배송지 추가하기'}</p>
      </div>
      {isDeleteModalFocused && <AddressDeleteModal closeForm={closeDeleteModal} addressId={0} />}
      {isModifyModalFocused && <AddressModifyModal closeForm={closeModifyModal} addressId={0} />}
      {isAddModalFocused && (
        <AddressAddModal onAddConfirm={onAddConfirm} closeForm={closeAddModal} />
      )}
    </S.AddressSection>
  );
}
