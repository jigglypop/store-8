import { ReactElement, useState } from 'react';
import * as S from './style';
import EditIcon from '@image/icon/editIcon.svg';
import DeleteIcon from '@image/icon/deleteIcon.svg';
import DeleteModal from '@components/common/DeleteModal/DeleteModal';
import QuestionForm from '../../QuestionForm/QuestionForm';
import { useQuestion } from '@client/hooks/question/question';

interface Props {
  id: number;
  title: string;
  contents: string;
  answer: string | null;
  answerDate: string | null;
  isSecret: boolean;
}

export default function QuestionDetail({
  id,
  title,
  contents,
  answer,
  answerDate,
  isSecret,
}: Props): ReactElement {
  const { updateQuestion, deleteQuestion } = useQuestion();
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const cancelBtnCb = (type: string) => () => {
    type === 'edit' ? setIsEdit(false) : setIsDelete(false);
  };

  const confirmDeleteQuestion = () => {
    deleteQuestion({ questionId: id });
    setIsDelete(false);
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
      {isEdit && (
        <QuestionForm
          cancelCbFn={cancelBtnCb('edit')}
          editTitle={title}
          editContents={contents}
          editIsSecret={isSecret}
        />
      )}
      {isDelete && (
        <DeleteModal cancelCbFn={cancelBtnCb('delete')} deleteCbFn={confirmDeleteQuestion} />
      )}
    </S.QuestionDetail>
  );
}
