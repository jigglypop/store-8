import React, { ReactElement } from 'react';
import * as S from './style';

import Star from '@components/common/Star/Star';
import { Link } from '@client/utils/router';
import { IMyReview } from '@middle/type/review/review';

interface Props {
  reviewData: IMyReview;
}

export default function MyReviewBox({ reviewData }: Props): ReactElement {
  const MAX_SCORE = 5;
  const {
    id,
    title,
    date,
    score,
    productInfo: { id: productId, title: productTitle, productImgSrc },
  } = reviewData;

  const stars = new Array(MAX_SCORE)
    .fill(0)
    .map((_, idx) => <Star key={idx} isSelect={idx < score} />);

  if (!productTitle || !productImgSrc) return <></>;
  return (
    <S.MyReviewBox>
      <div className="column-score">{stars}</div>
      <div className="column-title">
        <Link to={`/product/${productId}`} className="product-link">
          <>
            <div className="wrapper-thumbnail">
              <img src={productImgSrc} />
            </div>
            <div className="wrapper-title-thumbnail">
              <div>{productTitle}</div>
            </div>
          </>
        </Link>
      </div>
      <div className="column-title">
        <div>{title}</div>
      </div>
      <div className="column-date">
        <div>{date}</div>
      </div>
    </S.MyReviewBox>
  );
}
