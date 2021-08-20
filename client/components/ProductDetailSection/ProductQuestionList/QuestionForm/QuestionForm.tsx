import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import * as S from './style';

import sampleThumbnail from '@image/sample1/sample-thumbnail.jpeg';
import XIcon from '@image/question/xIcon.svg';
import Modal from '@components/common/Modal/Modal';
import CheckBox from '@components/common/CheckBox/CheckBox';

import { useQuestion } from '@client/hooks/question/question';

interface Props {
  setIsOpenForm: Dispatch<SetStateAction<boolean>>;
  editTitle?: string;
  editContents?: string;
  editIsSecret?: boolean;
}

export default function QuestionForm({
  setIsOpenForm,
  editTitle,
  editContents,
  editIsSecret,
}: Props): ReactElement {
  const isEdit = editTitle !== undefined;
  const { createQuestion, error } = useQuestion();
  const [title, setTitle] = useState(editTitle ?? '');
  const [contents, setContents] = useState(editContents ?? '');
  const [isSecret, setIsSecret] = useState(editIsSecret || false);

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setTitle(target.value);
  };

  const handleTextareaChange = ({ target }: { target: HTMLTextAreaElement }) => {
    setContents(target.value);
  };

  const handleCancelClick = () => setIsOpenForm(false);

  const handleSubmitClick = async () => {
    const questionFormData = { title, contents, isSecret };
    const isSuccess = await createQuestion(questionFormData);
    if (!isSuccess) return;
    handleCancelClick();
  };

  const isAbleSubmit = !!(title && contents);

  return (
    <Modal>
      <S.QuestionForm>
        <div className="question-form__header">
          <h2>상품 문의하기</h2>
          <div className="cancel-btn" onClick={handleCancelClick}>
            <XIcon />
          </div>
        </div>
        <div className="question-form__title">
          <img src={sampleThumbnail} alt="image" />
          <div className="title">테스트 제목</div>
        </div>
        <form>
          <div className="question-form__title-input">
            <div className="title">제목</div>
            <input
              type="text"
              value={title}
              onChange={handleInputChange}
              placeholder="제목을 입력해주세요"
              maxLength={50}
              className="question-form__input"
            />
          </div>
          <div className="question-form__contents-input">
            <div className="title">내용</div>
            <div className="textarea-wrapper">
              <textarea
                placeholder="내용을 입력해주세요 (최대 5000자까지 입력가능)"
                value={contents}
                onChange={handleTextareaChange}
                maxLength={5000}
                className="question-form__input"
              ></textarea>
              <div className="question-form__secret">
                <CheckBox isCheck={isSecret} setIsCheck={setIsSecret} className="checkbox-secret" />
                <div>비밀글로 문의하기</div>
              </div>
              <div className="question-form__error">{error}</div>
            </div>
          </div>
          <div className="question-form__btns">
            <button className="cancel-btn" onClick={handleCancelClick}>
              취소
            </button>
            <button className="submit-btn" disabled={!isAbleSubmit} onClick={handleSubmitClick}>
              등록
            </button>
          </div>
        </form>
      </S.QuestionForm>
    </Modal>
  );
}
