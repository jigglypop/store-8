import { ReactElement } from 'react';
import * as S from './style';
import * as CommonS from '../style';
import QuestionItem from './QuestionItem/QuestionItem';

interface Props {}

export default function ProductQuestionList({}: Props): ReactElement {
  const questionList = sampleData
    .map((data, idx) => <QuestionItem key={data.id} idx={idx} {...data} />)
    .reverse();

  return (
    <S.ProductQuestionList>
      <CommonS.UserFeedbackTitleContainer>
        <div className="title">상품문의</div>
        <button className="create-review-btn">상품문의 글쓰기</button>
      </CommonS.UserFeedbackTitleContainer>
      {/* <ul>${questionList.length ? { questionList } : <li>등록된 상품문의가 없습니다.</li>}</ul> */}
      <CommonS.UserPostingList>
        <li className="empty-msg">등록된 상품문의가 없습니다.</li>
        {questionList}
      </CommonS.UserPostingList>
    </S.ProductQuestionList>
  );
}

const sampleData = [
  {
    id: '123',
    title: '색상은?',
    userId: 'sample',
    isSecret: false,
    date: '2021.08.10',
    status: 'process',
  },
  {
    id: '1243',
    title: '구매문의',
    userId: 'aaample',
    isSecret: true,
    date: '2021.06.10',
    status: 'done',
  },
];
