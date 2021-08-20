import React, { ReactElement, useState } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import SearchBar from '@components/MyPage/SearchBar/SearchBar';
import ResultContainer from '@components/MyPage/OrderResultContainer/OrderResultContainer';
import { IResult, _filteredResults, sampleData } from '../dummydata';

interface Props {}

export default function OrderSection({}: Props): ReactElement {
  const [originalResults, setOriginalResults] = useState<IResult[]>(_filteredResults);

  return (
    <S.OrderSection>
      <Intro {...sampleData} />
      <SearchBar page="order" title="주문목록/배송조회" setOriginalResults={setOriginalResults} />
      <ResultContainer title="주문목록 / 배송조회 내역 " results={originalResults} />
    </S.OrderSection>
  );
}
