import React, { ReactElement, useState } from 'react';
import * as S from './style';

import Intro from '../Intro/Intro';
import SearchBar from '../SearchBar/SearchBar';
import RefundFilter from '../RefundFilter/RefundFilter';
import ResultContainer from '../ResultContainer/ResultContainer';

interface Props {}

export default function RefundSection({}: Props): ReactElement {
  const [clickedBtnIdx, setClickedBtnIdx] = useState(0);

  const setShownResult = () => {};

  return (
    <S.RefundSection>
      <Intro {...sampleData} />
      <SearchBar title="반품/환불" />
      <RefundFilter setShownResult={setShownResult} />
      <ResultContainer title="반품/환불 내역 총 " results={results} />
    </S.RefundSection>
  );
}

interface IResult {
  date: Date;
  id: number;
  orderNumber: string;
  title: string;
  option?: string;
  productPrice: number;
  productCount: number;
  status: string; // 주문상태
  checkOrReview: string; // 확인/리뷰
  thumbnailSrc: string;
}

const results: IResult[] = [
  {
    date: new Date('2021-08-08'),
    id: 4,
    orderNumber: 'WTC-DREAMD4-4',
    title: 'ㅋㅋ슬리퍼',
    option: '작은발',
    productPrice: 15000,
    productCount: 3,
    status: '주문상태', // 주문상태
    checkOrReview: '확인/리뷰', // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-09'),
    id: 5,
    orderNumber: 'WTC-DREAMD4-5',
    title: '맥주 휴대폰 홀더',
    productPrice: 20000,
    productCount: 1,
    status: '주문상태', // 주문상태
    checkOrReview: '확인/리뷰', // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-08'),
    id: 4,
    orderNumber: 'WTC-DREAMD4-4',
    title: 'ㅋㅋ슬리퍼',
    option: '작은발',
    productPrice: 15000,
    productCount: 3,
    status: '주문상태', // 주문상태
    checkOrReview: '확인/리뷰', // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-09'),
    id: 5,
    orderNumber: 'WTC-DREAMD4-5',
    title: '맥주 휴대폰 홀더',
    productPrice: 20000,
    productCount: 1,
    status: '주문상태', // 주문상태
    checkOrReview: '확인/리뷰', // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-08'),
    id: 4,
    orderNumber: 'WTC-DREAMD4-4',
    title: 'ㅋㅋ슬리퍼',
    option: '작은발',
    productPrice: 15000,
    productCount: 3,
    status: '주문상태', // 주문상태
    checkOrReview: '확인/리뷰', // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-09'),
    id: 5,
    orderNumber: 'WTC-DREAMD4-5',
    title: '맥주 휴대폰 홀더',
    productPrice: 20000,
    productCount: 1,
    status: '주문상태', // 주문상태
    checkOrReview: '확인/리뷰', // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
];

const sampleData = {
  couponCount: 1,
  mileage: 1000,
  name: '남영우',
  grade: '일반회원',
};
