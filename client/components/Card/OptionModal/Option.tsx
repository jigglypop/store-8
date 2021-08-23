import { ReactElement } from 'react';
import * as S from './style';

import checked from '@image/check-good.png';
import type { AddressData } from '@middle/type/address/address';

interface AddressProps {
  addressData: AddressData;
  selected: boolean;
}

function Option({ addressData, selected }: AddressProps): ReactElement {
  return (
    <S.Option>
      <div className="option-container">
        <p className="option-title">{addressData.address + ' ( ' + addressData.name + ' )'}</p>
        <p className="option-dDay">{addressData.extraAddress}</p>
      </div>
      {selected ? <img className="option-checked" src={checked} /> : <></>}
    </S.Option>
  );
}

export default Option;
