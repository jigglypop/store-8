import { ReactElement, useState } from 'react';
import * as S from './style';
import EditIcon from '@image/icon/editIcon.svg';
import DeleteIcon from '@image/icon/deleteIcon.svg';
import DeleteModal from '@components/common/DeleteModal/DeleteModal';

interface Props {
  contents: string;
  answer: string | null;
  answerDate: string | null;
}

export default function QuestionDetail({ contents, answer, answerDate }: Props): ReactElement {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const cancelBtnCb = (isEdit: boolean) => () => {
    isEdit ? setIsEdit(false) : setIsDelete(false);
  };

  const handleEditClick = () => setIsEdit(true);

  const handleDeleteClick = () => setIsDelete(true);

  return (
    <S.QuestionDetail>
      <div className="question-detail__question">
        <div className="question-detail__title">Q</div>
        <div className="question-detail__content">{contents}</div>
        <div className="question-detail__btns">
          <EditIcon onClick={handleEditClick} className="question-detail__edit-btn" />
          <DeleteIcon onClick={handleDeleteClick} className="question-detail__delete-btn" />
        </div>
      </div>
      {answer && (
        <div className="question-detail__answer">
          <div className="question-detail__title">A</div>
          <div className="question-detail__content">
            {answer}
            <div className="question-detail__date">{answerDate}</div>
          </div>
        </div>
      )}
      {isDelete && (
        <DeleteModal cancelCbFn={cancelBtnCb(false)} deleteCbFn={() => console.log('hello')} />
      )}
    </S.QuestionDetail>
  );
}
