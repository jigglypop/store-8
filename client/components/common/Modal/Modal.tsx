import { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from './style';
import { bodyScroll } from '@client/utils/utils';
import usePortal from '@client/hooks/usePortal';

interface Props {
  children?: ReactElement | ReactElement[];
  closeModal?: () => void;
  animation?: string;
}

export default function Modal({ children, closeModal, animation }: Props): ReactElement {
  const container = usePortal();

  useEffect(() => {
    bodyScroll.lock();
    return () => bodyScroll.unlock();
  }, []);

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
    container
  );
}
