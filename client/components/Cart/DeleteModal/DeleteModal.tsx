import React, { ReactElement } from 'react';
import * as S from './style';
import { NEXT_DELETE_TEXT } from '@constants/Cart';
import Modal from '@client/components/common/Modal/Modal';
import { ClientCartData } from '@middle/type/cart/cart';

interface DeleteModalProps {
  deleteLists: number[];
  contents: ClientCartData[];
  closeForm: () => void;
  confirm: () => void;
}

function DeleteModal(props: DeleteModalProps): ReactElement {
  return (
    <Modal closeModal={props.closeForm}>
      <S.DeleteModal>
        <div>
          <p className="delete-modal-title">{NEXT_DELETE_TEXT}</p>
          <div className="delete-modal-contents-container">
            {props.deleteLists.map((deleteIndex) => {
              const { option, title, count } = props.contents[deleteIndex];
              const infoText = `${title} ${
                option.length !== 0 ? `${'(' + option + ')'}` : ''
              } ${` x ${count}`}`;
              return (
                <div className="delete-row" key={deleteIndex}>
                  <p>{infoText}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'취소'}
          </button>
          <button onClick={props.confirm} className="delete-btn">
            {'삭제'}
          </button>
        </div>
      </S.DeleteModal>
    </Modal>
  );
}

export default DeleteModal;
