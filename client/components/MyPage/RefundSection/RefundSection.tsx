import React, { ReactElement, useState } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import SearchBar from '@components/MyPage/SearchBar/SearchBar';
import RefundFilter from '@components/MyPage/RefundFilter/RefundFilter';
import RefundResultContainer from '@components/MyPage/RefundResultContainer/RefundResultContainer';
import { IResult, _filteredResults, sampleData } from '@components/MyPage/dummydata';

interface Props {}

export default function RefundSection({}: Props): ReactElement {
  const [filterButtonIndex, setFilterButtonIndex] = useState(0);
  const [originalResults, setOriginalResults] = useState<IResult[]>(_filteredResults);
  const [filteredResults, setFilteredResults] = useState<IResult[]>(
    originalResults.filter((result: IResult) => {
      return result.state == (filterButtonIndex ? '처리완료' : '반품신청');
    })
  );

  const onFilterButtonHandler = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLButtonElement)) return;

    setFilterButtonIndex(+target.value);

    setFilteredResults(
      originalResults.filter((result: IResult) => {
        return result.state == (+target.value ? '처리완료' : '반품신청');
      })
    );
  };

  return (
    <S.RefundSection>
      <Intro {...sampleData} />
      <SearchBar page="refund" title="반품/환불" setOriginalResults={setOriginalResults} />
      <RefundFilter eventHandler={onFilterButtonHandler} index={filterButtonIndex} />
      <RefundResultContainer title="반품/환불 내역 총 " results={filteredResults} />
    </S.RefundSection>
  );
}
