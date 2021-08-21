import { ReactElement } from 'react';
import * as S from './style';

import checked from '@image/check-good.png';
import type { AddressData } from '@middle/type/address/address';

interface AddressProps {
  addressData: AddressData;
  selected: boolean;
}

function Address({ addressData, selected }: AddressProps): ReactElement {
  return (
    <S.Address>
      <div className="address-container">
        <p className="address-title">{addressData.address + ' ( ' + addressData.name + ' )'}</p>
        <p className="address-dDay">{addressData.extraAddress}</p>
      </div>
      {selected ? <img className="address-checked" src={checked} /> : <></>}
    </S.Address>
  );
}

export default Address;
