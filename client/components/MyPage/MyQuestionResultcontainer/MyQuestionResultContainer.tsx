import { ReactElement } from 'react';
import * as S from './style';

import { TextNoData } from '../ProductBox/style';
import { useMyQuestion } from '@client/hooks/my/useMyQuestion';
import { IMyQuestion } from '@middle/type/question/question';
import MyQuestionBox from '../MyQuestionBox/MyQuestionBox';
import Pagination from '@components/common/Pagination/Pagination';

import { DEFAULT_MYQUESTION_LIMIT } from '@middle/constants/default';

interface Props {}

export default function MyQuestionResultContainer({}: Props): ReactElement {
  const { myQuestions, totalCount, currentPage, setCurrentPage } = useMyQuestion();

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
        <div className="column-title">상품</div>
        <div className="column-title">문의 제목</div>
        <div className="column-date">날짜</div>
        <div className="column-status">답변상태</div>
      </div>
      <ul className="container-result-list">{myQuestionList}</ul>
      <Pagination
        totalCount={totalCount}
        defaultLimit={DEFAULT_MYQUESTION_LIMIT}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </S.MyQuestionResultContainer>
  );
}
