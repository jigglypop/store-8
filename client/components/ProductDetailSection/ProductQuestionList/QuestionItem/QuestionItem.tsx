import { ReactElement } from 'react';
import * as S from './style';

import Locker from '@image/question/lockerIcon.svg';

interface Props {
  idx: number;
  id: string;
  title: string;
  userId: string;
  isSecret: boolean;
  date: string;
  status: string;
}

export default function QuestionItem({
  idx,
  id,
  title,
  userId,
  isSecret,
  date,
  status,
}: Props): ReactElement {
  const hideId = (id: string): string => {
    return id.slice(0, 2) + new Array(id.slice(2).length).fill('*').join('');
  };
  const questionStatus = status === 'done' ? '답변완료' : '접수';

  const handleQuestionClick = () => {};
  return (
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
  );
}
