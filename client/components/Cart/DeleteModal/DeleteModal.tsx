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
          <div>
            {props.deleteLists.map((deleteIndex) => {
              const { option, title, count } = props.contents[deleteIndex];
              return (
                <div className="delete-row" key={deleteIndex}>
                  <p>{title}</p>
                  {option.length !== 0 ? <p>{'(' + option + ')'}</p> : <></>}
                  <p>{'_x ' + count}</p>
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
