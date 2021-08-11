import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  isLiked: boolean;
}

export default function DetailBtns({ id, isLiked }: Props): ReactElement {
  return <StyledDetailBtns></StyledDetailBtns>;
}

const StyledDetailBtns = styled.div``;
