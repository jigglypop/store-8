import { ReactElement, useState } from 'react';
import * as S from './style';
import * as CommonS from '../style';
import QuestionItem from './QuestionItem/QuestionItem';
import QuestionForm from './QuestionForm/QuestionForm';

import { useQuestion } from '@client/hooks/question/question';

interface Props {}

export default function ProductQuestionList({}: Props): ReactElement {
  const { question, loading, error } = useQuestion();
  const [isOpenForm, setIsOpenForm] = useState(false);

  if (!question) return <></>;
  //TODO USERID 목데이터 사용 중 로그인 적용 시 수정 예정
  const questionList = question.map((data, idx) => (
    <QuestionItem key={data.id} {...data} idx={idx} userId="testId" />
  ));

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
      </S.ProductQuestionList>
      {isOpenForm && <QuestionForm cancelCbFn={cancelFormCbFn} />}
    </>
  );
}
