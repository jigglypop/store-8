import { ReactElement, useState } from 'react';
import * as S from './style';
import { Link } from '@client/utils/router';

import { IMyQuestion } from '@middle/type/question/question';
import QuestionDetail from '@client/components/ProductDetailSection/ProductQuestionList/QuestionItem/QuestionDetail/QuestionDetail';

interface Props {
  questionData: IMyQuestion;
}

export default function MyQuestionBox({ questionData }: Props): ReactElement {
  const { id, title, date, answer, productInfo } = questionData;
  const { id: productId, title: productTitle, productImgSrc } = productInfo;
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const questionStatus = answer ? '답변완료' : '접수';

  const handleQuestionClick = () => {
    setIsOpenDetail((isOpenDetail) => !isOpenDetail);
  };

  if (!productTitle || !productImgSrc) return <></>;
  return (
    <>
      <S.MyQuestionBox onClick={handleQuestionClick}>
        <div className="column-product">
          <Link to={`/product/${productId}`} className="product-link">
            <>
              <div className="wrapper-thumbnail">
                <img src={productImgSrc} />
              </div>
              <div className="wrapper-title">
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
        <div className="column-status">
          <div>{questionStatus}</div>
        </div>
      </S.MyQuestionBox>
      {isOpenDetail && <QuestionDetail {...{ questionData, productInfo }} />}
    </>
  );
}
