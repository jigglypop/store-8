import { ReactElement } from 'react';
import * as S from './style';
import { Modal } from '../Modal/style';

interface Props {
  msg: string;
  cancelCbFn: () => void;
}

export default function AlertModal({ msg, cancelCbFn }: Props): ReactElement {
  return (
    <Modal>
      <S.AlertModal>
        <div className="alert-modal-title">{msg}</div>
        <button onClick={cancelCbFn} className="confirm-btn">
          확인
        </button>
      </S.AlertModal>
    </Modal>
  );
}
