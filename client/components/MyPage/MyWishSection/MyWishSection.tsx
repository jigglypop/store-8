import React, { ReactElement, useState } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import SearchBar from '@components/MyPage/SearchBar/SearchBar';
import ResultContainer from '@components/MyPage/MyWishResultContainer/MyWishResultContainer';

interface Props {}

export default function MyWishSection({}: Props): ReactElement {
  return (
    <S.MyWishSection>
      <Intro />
      {/* <SearchBar page="order" title="찜 목록" setOriginalResults={setOriginalResults} /> */}
      <ResultContainer title="찜 리스트 " />
    </S.MyWishSection>
  );
}
