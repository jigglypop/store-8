import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

export default function ImgMagifier({ src }: Props): ReactElement {
  const IMG_WIDTH = 480;
  const IMG_HEIGHT = 530;
  const MAGNIFIER_HEIGHT = 200;
  const MAGNIFIER_WIDTH = 200;
  const ZOOM_LEVEL = 1.5;
  const [showMagifier, setShowMagifier] = useState(false);
  const [[positionX, positionY], setPosition] = useState([0, 0]);
  const [[width, height], setSize] = useState([0, 0]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const imgElem = e.currentTarget;
    const { width, height } = imgElem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagifier(true);
  };
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
      <MagnifiedImg />
    </StyledZoomImg>
  );
}

const StyledZoomImg = styled.div`
  width: 480px;
  position: relative;

  & > img {
    width: 480px;
    height: 530px;
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
  cursor: none;
  height: ${(props) => props.width}px;
  width: ${(props) => props.height}px;

  top: ${({ positionY, height }) => positionY - height / 2}px;
  left: ${({ positionX, width }) => positionX - width / 2}px;

  border: none;
  background-color: rgba(0, 0, 0, 0.3);
`;

interface IMagnifiedImg {
  imgWidth: number;
  imgHeight: number;
  zoomLevel: number;
  src: string;
}

const MagnifiedImg = styled.div`
  /* background-image: url(${(props) => props.src});
  background-repeat: no-repeat;

  background-size: ${({ imgWidth, imgHeight, zoomLevel }) =>
    `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`};

  background-position-x: ${({ positionX, zoomLevel, width }) => -positionX * zoomLevel + width}px;
  background-position-y: ${({ positionY, zoomLevel, height }) =>
    -positionY * zoomLevel + height}px; */
`;
