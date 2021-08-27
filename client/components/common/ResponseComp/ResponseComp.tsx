import React, { ReactElement, ReactNode } from 'react';
import { useResponse } from '@client/hooks/useResponse';

interface Props {
  children: ReactNode;
}

export function Desktop({ children }: Props): ReactElement {
  const isDesktop = useResponse({ minWidth: 1300 });
  return isDesktop ? <>{children}</> : <></>;
}
export function Tablet({ children }: Props): ReactElement {
  const isTablet = useResponse({ minWidth: 768, maxWidth: 1300 });
  return isTablet ? <>{children}</> : <></>;
}
export function Mobile({ children }: Props): ReactElement {
  const isMobile = useResponse({ maxWidth: 768 });
  return isMobile ? <>{children}</> : <></>;
}
