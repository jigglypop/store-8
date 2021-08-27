import { ReactElement, useState } from 'react';
import * as S from './style';

import Locker from '@image/question/lockerIcon.svg';
import QuestionDetail from './QuestionDetail/QuestionDetail';
import { IQuestion } from '@middle/type/question/question';
import { hideId } from '@utils/encode';

interface Props {
  questionNo: number;
  questionData: IQuestion;
}

export default function QuestionItem({ questionNo, questionData }: Props): ReactElement {
  const { title, isSecret, date, answer, questionAuthor } = questionData;
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const questionStatus = answer ? '답변완료' : '접수';

  const handleQuestionClick = () => {
    setIsOpenDetail((isOpenDetail) => !isOpenDetail);
  };

  return (
    <>
      <S.QuestionItem onClick={handleQuestionClick}>
        <div>
          <div className="question-info no">{questionNo}</div>
          <div className="question-info title">
            {isSecret && <Locker />}
            {title}
          </div>
        </div>
        <div>
          <div className="question-info user-id">{hideId(questionAuthor)}</div>
          <div className="question-info date">{date}</div>
          <div className="question-info status">{questionStatus}</div>
        </div>
      </S.QuestionItem>
      {isOpenDetail && <QuestionDetail questionData={questionData} />}
    </>
  );
}
