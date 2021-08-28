import { ReactElement } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import AddressResult from './AddressResult/AddressResult';
import AddressAddModal from './AddressAddModal/AddressAddModal';
import AddressDeleteModal from './AddressDeleteModal/AddressDeleteModal';
import AddressModifyModal from './AddressModifyModal/AddressModifyModal';
import NumAdd from '@image/svg/numAdd.svg';

import { getAddress } from '@client/store/address/address';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { useState } from 'react';
import cache from '@client/utils/cache';

export default function AddressSection(): ReactElement {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.address.address);
  const [isDeleteModalFocused, setDeleteModalFocused] = useState(false);
  const [isModifyModalFocused, setModifyModalFocused] = useState(false);
  const [isAddModalFocused, setAddModalFocused] = useState(false);
  const [modifyAddressIndex, setModifyAddressIndex] = useState(-1);

  useEffect(() => {
    dispatch(getAddress(cache.get('token')));
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

  const onConfirm = () => {
    dispatch(getAddress(cache.get('token')));
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
              setModifyAddressIndex={setModifyAddressIndex}
              openDeleteModal={openDeleteModal}
              key={index}
              index={index}
              address={element}
            />
          );
        })}
      </div>
      <div className="add-address" onClick={openAddModal}>
        <NumAdd className="add-image" />
        <p>{'배송지 추가하기'}</p>
      </div>
      {isDeleteModalFocused && (
        <AddressDeleteModal
          onConfirm={onConfirm}
          closeForm={closeDeleteModal}
          addressData={address[modifyAddressIndex]}
        />
      )}
      {isModifyModalFocused && (
        <AddressModifyModal
          onConfirm={onConfirm}
          closeForm={closeModifyModal}
          addressData={address[modifyAddressIndex]}
        />
      )}
      {isAddModalFocused && <AddressAddModal onConfirm={onConfirm} closeForm={closeAddModal} />}
    </S.AddressSection>
  );
}
