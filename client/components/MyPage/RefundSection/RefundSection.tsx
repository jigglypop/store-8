import React, { ReactElement } from 'react';
import * as S from './style';

import Intro from '../Intro/Intro';
import SearchBar from '../SearchBar/SearchBar';

interface Props {}

export default function RefundSection({}: Props): ReactElement {
  return (
    <S.RefundSection>
      <Intro {...sampleData} />
      <h2>RefundSection</h2>
      <SearchBar />
    </S.RefundSection>
  );
}

const sampleData = {
  couponCount: 1,
  mileage: 1000,
  name: '남영우',
  grade: '일반회원',
};
