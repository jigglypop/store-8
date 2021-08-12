import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

export default function ImgMagifier({ src }: Props): ReactElement {
  const IMG_WIDTH = 480;
  const IMG_HEIGHT = 530;
  const MAGNIFIER_HEIGHT = 300;
  const MAGNIFIER_WIDTH = 300;

  const [showMagifier, setShowMagifier] = useState(false);
  const [[positionX, positionY], setPosition] = useState([0, 0]);

  const handleMouseEnter = () => setShowMagifier(true);

  const handleMouseLeave = () => setShowMagifier(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const imgElem = e.currentTarget;
    const { top, left } = imgElem.getBoundingClientRect();

    const positionX = getPositionX(e.pageX, left);
    const positionY = getPositionY(e.pageY, top);
    setPosition([positionX, positionY]);
  };

  //마우스 x좌표구하는 함수 (이미지 크기에 따른 제한)
  const getPositionX = (pageX: number, left: number) => {
    const x = pageX - left - window.pageXOffset;

    let positionX = x;
    if (positionX - MAGNIFIER_WIDTH / 2 < 0) positionX = MAGNIFIER_WIDTH / 2;
    if (positionX - MAGNIFIER_WIDTH / 2 > IMG_WIDTH - MAGNIFIER_WIDTH)
      positionX = IMG_WIDTH - MAGNIFIER_WIDTH / 2;
    return positionX;
  };
  //마우스 y좌표구하는 함수 (이미지 크기에 따른 제한)
  const getPositionY = (pageY: number, top: number) => {
    const y = pageY - top - window.pageYOffset;
    let positionY = y;
    if (positionY - MAGNIFIER_HEIGHT / 2 < 0) positionY = MAGNIFIER_HEIGHT / 2;
    if (positionY - MAGNIFIER_HEIGHT / 2 > IMG_HEIGHT - MAGNIFIER_HEIGHT)
      positionY = IMG_HEIGHT - MAGNIFIER_HEIGHT / 2;
    return positionY;
  };

  return (
    <StyledZoomImg
      imgWitdh={IMG_WIDTH}
      imgHeight={IMG_HEIGHT}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt="image" />
      {showMagifier && (
        <Magnifier
          width={MAGNIFIER_WIDTH}
          height={MAGNIFIER_HEIGHT}
          positionX={positionX}
          positionY={positionY}
        />
      )}
      {showMagifier && (
        <MagnifiedImg
          imgWidth={IMG_WIDTH}
          imgHeight={IMG_HEIGHT}
          magnifierWidth={MAGNIFIER_WIDTH}
          magnifierHeight={MAGNIFIER_HEIGHT}
          positionX={positionX}
          positionY={positionY}
          src={src}
        />
      )}
    </StyledZoomImg>
  );
}

interface IStyledZoomImg {
  imgWitdh: number;
  imgHeight: number;
}

const StyledZoomImg = styled.div<IStyledZoomImg>`
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

const Magnifier = styled.div<IMagnifier>`
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

const MagnifiedImg = styled.div<IMagnifiedImg>`
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
