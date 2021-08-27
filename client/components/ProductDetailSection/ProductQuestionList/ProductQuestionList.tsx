import { ReactElement, useState } from 'react';
import * as S from './style';
import * as CommonS from '../style';
import QuestionItem from './QuestionItem/QuestionItem';
import QuestionForm from './QuestionForm/QuestionForm';
import Pagination from '@components/common/Pagination/Pagination';
import LoginNeedModal from '@client/components/common/LoginNeedModal/LoginNeedModal';

import { useCheck } from '@client/hooks/auth/check';
import { useQuestion } from '@client/hooks/question/question';
import { DEFAULT_QUESTION_LIMIT } from '@middle/constants/default';

interface Props {}

export default function ProductQuestionList({}: Props): ReactElement {
  const { check } = useCheck();
  const { totalCount, questions, currentPage, setCurrentPage } = useQuestion();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  //TODO USERID 목데이터 사용 중 로그인 적용 시 수정 예정
  const questionList = questions.map((data, idx) => {
    const questionNo = totalCount - (currentPage - 1) * DEFAULT_QUESTION_LIMIT - idx;
    return <QuestionItem key={data.id} questionNo={questionNo} questionData={data} />;
  });

  const handlePostBtnClick = () => {
    if (!check) {
      setIsOpenLoginModal(true);
      return;
    }

    setIsOpenForm(true);
  };

  const cancelFormCbFn = () => setIsOpenForm(false);
  const closeLoginModal = () => setIsOpenLoginModal(false);

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
        {totalCount !== 0 && (
          <Pagination
            totalCount={totalCount}
            defaultLimit={DEFAULT_QUESTION_LIMIT}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </S.ProductQuestionList>
      {isOpenForm && <QuestionForm cancelCbFn={cancelFormCbFn} />}
      {isOpenLoginModal && <LoginNeedModal cancelCbFn={closeLoginModal} />}
    </>
  );
}
