import { ReactElement, useState } from 'react';
import * as S from './style';
import * as CommonS from '../style';
import QuestionItem from './QuestionItem/QuestionItem';
import QuestionForm from './QuestionForm/QuestionForm';
import { IQuestion } from '@client/type/question/question';

interface Props {}

export default function ProductQuestionList({}: Props): ReactElement {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const questionList = sampleData.map((data, idx) => (
    <QuestionItem key={data.id} {...data} idx={idx} />
  ));

  const handlePostBtnClick = () => setIsOpenForm(true);

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
      {isOpenForm && <QuestionForm setIsOpenForm={setIsOpenForm} />}
    </>
  );
}

const sampleData: IQuestion[] = [
  {
    id: '2123',
    title: '색상은?',
    contents: '색상은 뭐가 어떻게 될까요?',
    userId: 'sample',
    isSecret: false,
    date: '2021.08.10',
    status: 'process',
  },
  {
    id: '1123',
    title: '구매문의',
    contents: '테스트 컨텐트 입니다',
    userId: 'aaample',
    isSecret: true,
    date: '2021.06.10',
    status: 'done',
    answer: '테스트 답변완료',
  },
];
