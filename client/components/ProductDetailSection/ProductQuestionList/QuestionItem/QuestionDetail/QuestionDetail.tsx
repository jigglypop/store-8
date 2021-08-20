import { ReactElement } from 'react';
import * as S from './style';

interface Props {
  contents: string;
  answer: string | null;
  answerDate: string | null;
}

export default function QuestionDetail({ contents, answer, answerDate }: Props): ReactElement {
  return (
    <S.QuestionDetail>
      <div className="question-detail__question">
        <div className="question-detail__title">Q</div>
        <div className="question-detail__content">{contents}</div>
      </div>
      {answer && (
        <div className="question-detail__answer">
          <div className="question-detail__title">A</div>
          <div className="question-detail__content">{answer}</div>
          <div className="question-detail__date">{answerDate}</div>
        </div>
      )}
    </S.QuestionDetail>
  );
}
