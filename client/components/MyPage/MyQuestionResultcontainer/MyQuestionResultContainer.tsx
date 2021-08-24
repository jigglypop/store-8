import { ReactElement } from 'react';
import * as S from './style';

import { TextNoData } from '../ProductBox/style';
import { useMyQuestion } from '@client/hooks/my/useMyQuestion';
import { IMyQuestion } from '@middle/type/question/question';
import MyQuestionBox from '../MyQuestionBox/MyQuestionBox';

interface Props {}

export default function MyQuestionResultContainer({}: Props): ReactElement {
  const { myQuestions, totalCount } = useMyQuestion();

  const myQuestionList = !myQuestions ? (
    <TextNoData>조회 내역이 없습니다.</TextNoData>
  ) : (
    myQuestions.map((questionData: IMyQuestion) => (
      <MyQuestionBox key={questionData.id} questionData={questionData} />
    ))
  );

  return (
    <S.MyQuestionResultContainer>
      <h4>
        나의 상품문의 <b>{totalCount}</b>건
      </h4>
      <div className="container-column">
        <div className="column-button">
          <h4>찜하기</h4>
        </div>
        <div className="column-title">
          <h4>상품명</h4>
        </div>
        <div className="column-price">
          <h4>test</h4>
        </div>
      </div>
      <div className="container-result-list">{myQuestionList}</div>
    </S.MyQuestionResultContainer>
  );
}
