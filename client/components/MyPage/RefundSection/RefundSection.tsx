import React, { ReactElement, useState } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import SearchBar from '@components/MyPage/SearchBar/SearchBar';
import RefundFilter from '@components/MyPage/RefundFilter/RefundFilter';
import RefundResultContainer from '@components/MyPage/RefundResultContainer/RefundResultContainer';
import { useMyRefund } from '@client/hooks/myRefund/myRefund';
import { IRefund } from '@middle/type/myRefund/myRefund';
interface Props {}

export default function RefundSection({}: Props): ReactElement {
  const [filterButtonIndex, setFilterButtonIndex] = useState(0);

  const toggleFilterButton = (value: number) => {
    setFilterButtonIndex(value);
  };

  return (
    <S.RefundSection>
      <Intro />
      <SearchBar page="refund" title="반품/환불" />
      <RefundFilter eventHandler={toggleFilterButton} filterIndex={filterButtonIndex} />
      <RefundResultContainer filterIndex={filterButtonIndex} />
    </S.RefundSection>
  );
}
