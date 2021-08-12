import { ReactElement } from "react";
import * as S from "./style"

interface IWrapper {
    children: ReactElement | ReactElement[] | string;
}
function Wrapper({ children, ...rest } :  IWrapper) {
  return (
    <S.Wrapper {...rest}>
      {children}
    </S.Wrapper>
  );
}

export default Wrapper;