import { bodyScroll } from '@client/utils/utils';
import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import Modal from '../Modal/Modal';
import * as S from './style';

interface Props {
  cancelCbFn: () => void;
  deleteCbFn: () => void;
}

export default function DeleteModal({ cancelCbFn, deleteCbFn }: Props): ReactElement {
  useEffect(() => {
    bodyScroll.lock();
  }, []);

  const handleClickCancel = () => {
    bodyScroll.unlock();
    cancelCbFn();
  };

  const handleClickDelete = () => {
    bodyScroll.unlock();
    deleteCbFn();
  };

  return (
    <Modal>
      <S.DeleteModal>
        <div className="delete-modal-title">정말로 삭제하시겠습니까?</div>
        <div className="delete-modal__btns">
          <button onClick={handleClickCancel} className="cancle-btn">
            취소
          </button>
          <button onClick={handleClickDelete} className="delete-btn">
            삭제
          </button>
        </div>
      </S.DeleteModal>
    </Modal>
  );
}
