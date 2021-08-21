import React, { ReactElement } from 'react';
import * as S from './style';

import { _filteredResults } from '../dummydata';
import ProductBox from '../ProductBox/ProductBox';
import { IProduct } from '@middle/type/product/product';
import { TextNoData } from '../ProductBox/style';
import { useMyWish } from '@client/hooks/mywish/category';

interface Props {
  title: string;
}

export default function ResultContainer({ title }: Props): ReactElement {
  const { mywish } = useMyWish();
  return (
    <S.MyWishResultContainer>
      <h4>
        {title} <b>{mywish?.rows.length}</b>건
      </h4>
      <div className="container-column">
        <div className="column-button">
          <h4>찜하기</h4>
        </div>
        <div className="column-title">
          <h4>상품명/옵션</h4>
        </div>
        <div className="column-price">
          <h4>상품금액/수량</h4>
        </div>
      </div>
      <div className={'container-result-list'}>
        {!mywish ? (
          <TextNoData>조회 내역이 없습니다.</TextNoData>
        ) : (
          mywish.rows.map((data, idx) => <ProductBox result={data} key={idx} />)
        )}
      </div>
    </S.MyWishResultContainer>
  );
}

//<div className="text-no-data">조회 내역이 없습니다.</div>
