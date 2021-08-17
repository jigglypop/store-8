import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import * as S from './style';

import sampleThumbnail from '@image/sample1/sample-thumbnail.jpeg';
import XIcon from '@image/question/xIcon.svg';
import Modal from '@components/common/Modal/Modal';
import CheckBox from '@components/common/CheckBox/CheckBox';

interface Props {
  setIsOpenForm: Dispatch<SetStateAction<boolean>>;
}

export default function QuestionForm({ setIsOpenForm }: Props): ReactElement {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setTitle(target.value);
  };

  const handleTextareaChange = ({ target }: { target: HTMLTextAreaElement }) => {
    setContent(target.value);
  };

  const handleCancelClick = () => setIsOpenForm(false);

  const handleSubmitClick = () => {
    //post요청
    handleCancelClick();
  };

  const isAbleSubmit = !!(title && content);

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
          <div className="question-form__content-input">
            <div className="title">내용</div>
            <div className="textarea-wrapper">
              <textarea
                placeholder="내용을 입력해주세요 (최대 5000자까지 입력가능)"
                value={content}
                onChange={handleTextareaChange}
                maxLength={5000}
                className="question-form__input"
              ></textarea>
              <div className="question-form__secret">
                <CheckBox isCheck={isSecret} setIsCheck={setIsSecret} className="checkbox-secret" />
                <div>비밀글로 문의하기</div>
              </div>
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
