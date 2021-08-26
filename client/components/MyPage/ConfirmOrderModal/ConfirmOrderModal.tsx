import { ReactElement, useState } from 'react';
import * as S from './style';
import Modal from '@client/components/common/Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';

interface ConfirmModalProps {
  closeForm: () => void;
  confirm: React.MouseEventHandler<HTMLButtonElement>;
}

function ConfirmOrderModal(props: ConfirmModalProps): ReactElement {
  return (
    <Modal closeModal={props.closeForm}>
      <S.ConfirmOrderModal>
        <h4>구매를 확정하시겠습니까?</h4>
        <div className="container-button">
          <button className="button-ok" onClick={props.confirm}>
            확인
          </button>
          <button className="button-cancel" onClick={props.confirm}>
            취소
          </button>
        </div>
      </S.ConfirmOrderModal>
    </Modal>
  );
}

export default ConfirmOrderModal;
