import React, { ReactElement } from 'react';
import * as S from './style';

import { IReviewRes } from '@middle/type/review/review';

interface Props {
  reviewData: IReviewRes;
}

export default function ReviewDetail({ reviewData }: Props): ReactElement {
  return <S.ReviewDetail>123</S.ReviewDetail>;
}
