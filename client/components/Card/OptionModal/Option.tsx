import { ReactElement } from 'react';
import * as S from './style';

import checked from '@image/check-good.png';
import type { AddressData } from '@middle/type/address/address';

interface OptionProps {
  title: string;
  selected: boolean;
}

function Option({ title, selected }: OptionProps): ReactElement {
  return (
    <S.Option>
      <div className="option-container">
        <p className="option-title">{title}</p>
      </div>
      {selected ? <img className="option-checked" src={checked} /> : <></>}
    </S.Option>
  );
}

export default Option;
