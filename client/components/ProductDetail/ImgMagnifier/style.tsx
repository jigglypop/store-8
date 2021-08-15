import styled from '@lib/styledComponent';

interface IZoomImg {
  imgWitdh: number;
  imgHeight: number;
}

export const ZoomImg = styled.div<IZoomImg>`
  width: ${(props) => props.imgWitdh}px;
  position: relative;

  & > img {
    width: ${(props) => props.imgWitdh}px;
    height: ${(props) => props.imgHeight}px;
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
`;

interface IMagnifiedImg {
  imgWidth: number;
  imgHeight: number;
  magnifierWidth: number;
  magnifierHeight: number;
  positionX: number;
  positionY: number;
  src: string;
}

export const MagnifiedImg = styled.div<IMagnifiedImg>`
  position: absolute;

  width: ${(props) => props.imgWidth}px;
  height: ${(props) => props.imgHeight}px;
  top: 0;
  left: ${(props) => props.imgWidth + 80}px;

  background-color: green;

  background-image: url(${(props) => props.src});

  background-repeat: no-repeat;

  background-size: ${({ imgWidth, imgHeight, magnifierWidth, magnifierHeight }) => {
    return `${(imgWidth * imgWidth) / magnifierWidth}px ${
      (imgHeight * imgHeight) / magnifierHeight
    }px`;
  }};

  background-position-x: ${({ positionX, magnifierWidth }) => {
    return (-positionX * positionX) / magnifierWidth + positionX / 2;
  }}px;

  background-position-y: ${({ positionY, magnifierHeight }) => {
    return (-positionY * positionY) / magnifierHeight + positionY / 2;
  }}px;
`;
