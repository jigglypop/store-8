import React, { ReactElement } from 'react';
import * as S from './style';

import Intro from '../Intro/Intro';
import SearchBar from '../SearchBar/SearchBar';

interface Props {}

export default function OrderSection({}: Props): ReactElement {
  return (
    <S.OrderSection>
      <Intro {...sampleData} />
      <SearchBar />
    </S.OrderSection>
  );
}

const sampleData = {
  couponCount: 1,
  bonusPoint: 1000,
  name: '송하영',
  grade: '일반회원',
};
