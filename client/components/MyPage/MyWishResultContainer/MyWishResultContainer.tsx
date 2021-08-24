import React, { ReactElement } from 'react';
import * as S from './style';

import ProductBox from '../ProductBox/ProductBox';
import { TextNoData } from '@components/MyPage/common/style';
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
        <div className="column-date">찜하기</div>
        <div className="column-title">상품명/옵션</div>
        <div className="column-price">상품금액/수량</div>
      </div>
      {!mywish?.rows.length ? (
        <div className={'container-result-list no-data'}>
          <TextNoData>조회 내역이 없습니다.</TextNoData>
        </div>
      ) : (
        <div className={'container-result-list'}>
          {mywish.rows.map((data, idx) => (
            <ProductBox result={data} key={idx} />
          ))}
        </div>
      )}
    </S.MyWishResultContainer>
  );
}

//<div className="text-no-data">조회 내역이 없습니다.</div>
