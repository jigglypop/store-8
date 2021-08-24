import React, { ReactElement } from 'react';
import Modal from '../Modal/Modal';
import * as S from './style';

interface Props {
  cancelCbFn: () => void;
  deleteCbFn: () => void;
}

export default function DeleteModal({ cancelCbFn, deleteCbFn }: Props): ReactElement {
  return (
    <Modal>
      <S.DeleteModal>
        <div className="delete-modal-title">정말로 삭제하시겠습니까?</div>
        <div className="delete-modal__btns">
          <button onClick={cancelCbFn} className="cancle-btn">
            취소
          </button>
          <button onClick={deleteCbFn} className="delete-btn">
            삭제
          </button>
        </div>
      </S.DeleteModal>
    </Modal>
  );
}
