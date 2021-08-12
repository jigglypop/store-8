import { ReactElement } from 'react';
import * as S from './style';

interface Props {}

export default function DetailInfo({}: Props): ReactElement {
  const DetailImgList = sampleData.map((src, idx) => (
    <img key={src} src={src} alt="detail-image" />
  ));
  return (
    <S.DetailInfo>
      <div className="title">상품상세정보</div>
      <div className="detail-imgs">{DetailImgList}</div>
    </S.DetailInfo>
  );
}

import sample1 from '@image/sample1/sample1.jpeg';
import sample2 from '@image/sample1/sample2.jpeg';
import sample3 from '@image/sample1/sample3.jpeg';
import sample4 from '@image/sample1/sample4.jpeg';
import sample5 from '@image/sample1/sample5.jpeg';
import sample6 from '@image/sample1/sample6.jpeg';
import sample7 from '@image/sample1/sample7.jpeg';
import sample8 from '@image/sample1/sample8.jpeg';
import sample9 from '@image/sample1/sample9.jpeg';
import sample10 from '@image/sample1/sample10.jpeg';

const sampleData = [
  sample1,
  sample2,
  sample3,
  sample4,
  sample5,
  sample6,
  sample7,
  sample8,
  sample9,
  sample10,
];
