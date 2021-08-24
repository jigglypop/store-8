import { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from './style';
import { bodyScroll } from '@client/utils/utils';

interface Props {
  children?: ReactElement | ReactElement[];
  closeModal?: () => void;
  animation?: string;
}

export default function Modal({ children, closeModal, animation }: Props): ReactElement {
  const rootModal = document.querySelector('#root-modal');

  useEffect(() => {
    bodyScroll.lock();
    return () => bodyScroll.unlock();
  }, []);

  if (!rootModal) return <></>;
  return createPortal(
    <S.Modal className={animation} onClick={closeModal}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </S.Modal>,
    rootModal
  );
}
