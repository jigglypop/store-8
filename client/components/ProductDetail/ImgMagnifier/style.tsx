import styled from '@lib/styledComponent';
// import styled from 'styled-components';

interface IZoomImg {
  imgWitdh: number;
  imgHeight: number;
}

export const ZoomImg = styled.div<IZoomImg>`
  width: ${(props) => props.imgWitdh}px;
  height: ${(props) => props.imgHeight}px;
  position: relative;

  & > img {
    width: ${(props) => props.imgWitdh}px;
    height: ${(props) => props.imgHeight}px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    & > img {
      width: 100%;
      object-fit: cover;
    }
    margin-bottom: 20px;
  }
`;

interface IMagnifier {
  width: number;
  height: number;
  positionX: number;
  positionY: number;
}

export const Magnifier = styled.div<IMagnifier>`
  position: absolute;
  height: ${(props) => props.width}px;
  width: ${(props) => props.height}px;

  top: ${({ positionY, height }) => positionY - height / 2}px;
  left: ${({ positionX, width }) => positionX - width / 2}px;

  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: zoom-in;
`;

interface IMagnifiedImg {
  imgWidth: number;
  imgHeight: number;
  magnifierWidth: number;
  magnifierHeight: number;
  positionX: number;
  positionY: number;
  showMagifier: boolean;
}

export const MagnifiedImg = styled.div<IMagnifiedImg>`
  position: absolute;
  overflow: hidden;
  visibility: ${({ showMagifier }) => (showMagifier ? 'visible' : 'hidden')};
  opacity: ${({ showMagifier }) => (showMagifier ? 1 : 0)};
  transition: visibility 0.2s linear, opacity 0.2s linear;
  width: ${(props) => props.imgWidth}px;
  height: ${(props) => props.imgHeight}px;
  top: 0;
  left: ${(props) => props.imgWidth + 80}px;
  z-index: 9;
  animation: slowShow 0.5s;

  @media only screen and (max-width: 768px) {
    left: 0;
    top: ${(props) => props.imgHeight + 24}px;
  }

  img {
    width: ${(props) => props.imgWidth}px;
    height: ${(props) => props.imgHeight}px;
    transform-origin: ${({ positionX, positionY }) => `${positionX}px, ${positionY}px`};

    transform: ${({
      positionX,
      positionY,
      imgWidth,
      imgHeight,
      magnifierWidth,
      magnifierHeight,
    }) => {
      const rateX = imgWidth / magnifierWidth;
      const rateY = imgHeight / magnifierHeight;
      return `
        scale(${rateX},${rateY})
        translateX(${(rateX * magnifierWidth) / 2 - positionX}px)
        translateY(${(rateY * magnifierHeight) / 2 - positionY}px)
      `;
    }};
  }
`;
