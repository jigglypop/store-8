import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import * as S from './style';

interface Props {
  children?: ReactElement | ReactElement[];
  closeModal?: () => void;
  animation?: string;
}

export default function Modal({ children, closeModal, animation }: Props): ReactElement {
  const rootModal = document.querySelector('#root-modal');

  if (!rootModal) return <></>;
  return createPortal(
    <S.Modal className={animation} onClick={closeModal}>
      {children}
    </S.Modal>,
    rootModal
  );
}
