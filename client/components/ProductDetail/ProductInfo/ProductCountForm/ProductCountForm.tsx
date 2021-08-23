import { ReactElement, FormEvent } from 'react';
import * as S from './style';

import PlusIcon from '@image/icon/plusIcon.svg';
import MinusIcon from '@image/icon/minusIcon.svg';

interface Props {
  inputValue: string;
  handleCountSumbit: (e: FormEvent) => void;
  handleClickCountPlus: () => void;
  handleClickCountMinus: () => void;
  handleInputChange: ({ target }: { target: HTMLElement | null }) => void;
}

export default function ProductCountForm({
  inputValue,
  handleCountSumbit,
  handleClickCountPlus,
  handleClickCountMinus,
  handleInputChange,
}: Props): ReactElement {
  return (
    <S.ProductCountForm onSubmit={handleCountSumbit}>
      <button type="button" className="count-btn" onClick={handleClickCountMinus}>
        <MinusIcon />
      </button>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleCountSumbit}
      />
      <button type="button" className="count-btn" onClick={handleClickCountPlus}>
        <PlusIcon />
      </button>
    </S.ProductCountForm>
  );
}
