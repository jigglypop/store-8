import React, { ReactElement } from 'react';
import Modal from '../Modal/Modal';
import { Link } from '@utils/router';
import * as S from './style';

interface Props {
  cancelCbFn: () => void;
}

export default function LoginNeedModal({ cancelCbFn }: Props): ReactElement {
  return (
    <Modal>
      <S.LoginNeedModal>
        <div className="login-modal-title">{'로그인이 필요한 서비스입니다.'}</div>
        <div className="login-modal__btns">
          <button onClick={cancelCbFn} className="cancle-btn">
            {'취소'}
          </button>
          <Link to={'login'}>
            <button className="delete-btn">{'로그인하러 가기'}</button>
          </Link>
        </div>
      </S.LoginNeedModal>
    </Modal>
  );
}
