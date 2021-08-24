import React, { ReactElement } from 'react';
import * as S from './style';
import { Link } from '@client/utils/router';
import { IMyReview } from '@middle/type/review/review';

interface Props {
  reviewData: IMyReview;
}

export default function MyReviewBox({ reviewData }: Props): ReactElement {
  const {
    id,
    title,
    date,
    productInfo: { id: productId, title: productTitle, productImgSrc },
  } = reviewData;

  if (!productTitle || !productImgSrc) return <></>;
  return (
    <S.MyReviewBox>
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
