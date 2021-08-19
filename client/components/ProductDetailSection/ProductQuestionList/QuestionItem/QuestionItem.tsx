import { ReactElement, useState } from 'react';
import * as S from './style';

import Locker from '@image/question/lockerIcon.svg';
import QuestionDetail from './QuestionDetail/QuestionDetail';
import { IQuestionRes } from '@middle/type/question/question';

interface Props extends IQuestionRes {
  idx: number;
  userId: string;
}

export default function QuestionItem({
  idx,
  id,
  title,
  contents,
  userId,
  isSecret,
  date,
  answer,
  answerDate,
}: Props): ReactElement {
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const hideId = (id: string): string => {
    return id.slice(0, 2) + new Array(id.slice(2).length).fill('*').join('');
  };
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
      {isOpenDetail && <QuestionDetail {...{ contents, answer, answerDate }} />}
    </>
  );
}
