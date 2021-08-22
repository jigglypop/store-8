import { ReactElement, useState } from 'react';
import * as S from './style';

import Locker from '@image/question/lockerIcon.svg';
import QuestionDetail from './QuestionDetail/QuestionDetail';
import { IQuestion } from '@middle/type/question/question';
import { hideId } from '@utils/encode';

interface Props {
  idx: number;
  userId: string;
  questionData: IQuestion;
}

export default function QuestionItem({ idx, userId, questionData }: Props): ReactElement {
  const { id, title, contents, isSecret, date, answer, answerDate, isOwned } = questionData;
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const questionStatus = answer ? '답변완료' : '접수';

  const handleQuestionClick = () => {
    setIsOpenDetail((isOpenDetail) => !isOpenDetail);
  };
  return (
    <>
      <S.QuestionItem onClick={handleQuestionClick}>
        <div>
          <div className="question-info no">{idx + 1}</div>
          <div className="question-info title">
            {isSecret && <Locker />}
            {title}
          </div>
        </div>
        <div>
          <div className="question-info user-id">{hideId(userId)}</div>
          <div className="question-info date">{date}</div>
          <div className="question-info status">{questionStatus}</div>
        </div>
      </S.QuestionItem>
      {isOpenDetail && <QuestionDetail questionData={questionData} />}
    </>
  );
}
