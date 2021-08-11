import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

export default function ZoomImg({ src }: Props): ReactElement {
  return (
    <StyledZoomImg>
      <img src={src} alt="image" />
    </StyledZoomImg>
  );
}

const StyledZoomImg = styled.div`
  width: 500px;

  padding: 0 20px;
  & > img {
    width: 480px;
    height: 530px;
  }
`;
