import { ReactElement, useState } from 'react';
import * as S from './style';
import Modal from '@client/components/common/Modal/Modal';

interface ConfirmModalProps {
  closeForm: () => void;
  confirm: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

function ConfirmCheckModal(props: ConfirmModalProps): ReactElement {
  return (
    <Modal closeModal={props.closeForm}>
      <S.ConfirmCheckModal>
        <h4>{props.text}</h4>
        <div className="container-button">
          <button className="button-cancel" onClick={props.closeForm}>
            취소
          </button>
          <button className="button-ok" onClick={props.confirm}>
            확인
          </button>
        </div>
      </S.ConfirmCheckModal>
    </Modal>
  );
}

export default ConfirmCheckModal;
