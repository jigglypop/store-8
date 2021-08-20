import React, { ReactElement } from 'react';
import styled from '@client/lib/styledComponent';
import Modal from '../Modal/Modal';

interface Props {
  cancelCbFn: () => void;
  deleteCbFn: () => void;
}

export default function DeleteModal({ cancelCbFn, deleteCbFn }: Props): ReactElement {
  return (
    <Modal>
      <StyledDeleteModal>
        <div className="delete-modal-title">정말로 삭제하시겠습니까?</div>
        <div className="delete-modal__btns">
          <button onClick={cancelCbFn} className="cancle-btn">
            취소
          </button>
          <button onClick={deleteCbFn} className="delete-btn">
            삭제
          </button>
        </div>
      </StyledDeleteModal>
    </Modal>
  );
}

const StyledDeleteModal = styled.div`
  min-height: 300px;
  width: 450px;
  border-radius: 20px;
  padding: 40px;
  background-color: var(--background-white-dark);
  color: var(--text-black-dark);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .delete-modal-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    flex: 1;
    font-size: var(--body-huge-font);
  }

  .delete-modal__btns {
    display: flex;
    justify-content: space-between;
    & > button {
      width: 100px;
      height: 36px;
      border-radius: 4px;
      color: var(--text-black-dark);
    }
    .cancle-btn {
      border: 1px solid var(--background-black-dark);
      background-color: var(--background-white-dark);
      &:hover {
        background-color: var(--background-gray);
        color: var(--text-white-dark);
      }
    }
    .delete-btn {
      background-color: var(--background-red);
      color: var(--text-white);
      &:hover {
        background-color: var(--background-dark-red);
      }
    }
  }
`;
