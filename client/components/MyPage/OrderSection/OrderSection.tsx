import React, { ReactElement, useState } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import SearchBar from '@components/MyPage/SearchBar/SearchBar';
import ResultContainer from '@components/MyPage/ResultContainer/ResultContainer';
import { setConstantValue } from 'typescript';

interface Props {}

export default function OrderSection({}: Props): ReactElement {
  return (
    <S.OrderSection>
      <Intro {...sampleData} />
      <SearchBar title="주문목록/배송조회" />
      <ResultContainer title="주문목록 / 배송조회 내역 " results={results} />
    </S.OrderSection>
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
