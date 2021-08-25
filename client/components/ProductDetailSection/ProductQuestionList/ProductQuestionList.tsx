import { ReactElement, useState } from 'react';
import * as S from './style';
import * as CommonS from '../style';
import QuestionItem from './QuestionItem/QuestionItem';
import QuestionForm from './QuestionForm/QuestionForm';
import Pagination from '@components/common/Pagination/Pagination';

import { useQuestion } from '@client/hooks/question/question';
import { DEFAULT_QUESTION_LIMIT } from '@middle/constants/default';

interface Props {}

export default function ProductQuestionList({}: Props): ReactElement {
  const { totalCount, questions, currentPage, setCurrentPage } = useQuestion();
  const [isOpenForm, setIsOpenForm] = useState(false);

  //TODO USERID 목데이터 사용 중 로그인 적용 시 수정 예정
  const questionList = questions.map((data, idx) => {
    const questionNo = totalCount - (currentPage - 1) * DEFAULT_QUESTION_LIMIT - idx;
    return (
      <QuestionItem key={data.id} questionNo={questionNo} questionData={data} userId="testId" />
    );
  });

  const handlePostBtnClick = () => setIsOpenForm(true);

  const cancelFormCbFn = () => setIsOpenForm(false);

  return (
    <>
      <S.ProductQuestionList>
        <CommonS.UserFeedbackTitleContainer>
          <div className="title">상품문의</div>
          <button className="create-review-btn" onClick={handlePostBtnClick}>
            상품문의 글쓰기
          </button>
        </CommonS.UserFeedbackTitleContainer>
        <CommonS.UserPostingList>
          {questionList.length ? (
            questionList
          ) : (
            <li className="empty-msg">등록된 상품문의가 없습니다.</li>
          )}
        </CommonS.UserPostingList>
        <Pagination
          totalCount={totalCount}
          defaultLimit={DEFAULT_QUESTION_LIMIT}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </S.ProductQuestionList>
      {isOpenForm && <QuestionForm cancelCbFn={cancelFormCbFn} />}
    </>
  );
}
