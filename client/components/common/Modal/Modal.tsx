import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import * as S from './style';

interface Props {
  children: ReactElement | ReactElement[];
}

export default function Modal({ children }: Props): ReactElement {
  const rootModal = document.querySelector('#root-modal');

  if (!rootModal) return <></>;
  return createPortal(<S.Modal>{children}</S.Modal>, rootModal);
}
