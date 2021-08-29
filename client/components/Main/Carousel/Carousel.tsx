import { Link } from '@client/utils/router';
import { useEffect, useRef, useState } from 'react';
import { $, getPixelNumber } from '../../../utils/jQurey';
import * as S from './style';

type ICarouselItem = {
  id: number;
  url: string;
};

// 캐러셀
const imageUrls: ICarouselItem[] = [
  {
    id: 305,
    url: 'public/image/carousel/main305.gif',
  },
  {
    id: 302,
    url: 'public/image/carousel/main302.gif',
  },
  {
    id: 298,
    url: 'public/image/carousel/main298.gif',
  },
];
const Carousel = () => {
  // carousel의 ref
  const carouselRef = useRef<HTMLDivElement>(null);
  // 현재 선택된 index 값
  const [currentIdx, setCurrentIdx] = useState(0);

  const onClick = (index: number) => {
    setCurrentIdx(index);
  };
  // currentIdx가 바뀔 때
  useEffect(() => {
    const carouselWidth = $('body').val('--carousel-width') || '0px';
    const width = getPixelNumber(carouselWidth);
    const transform = `translateX(-${currentIdx * width}px)`;
    if (carouselRef.current) {
      carouselRef.current.style.transform = transform;
    }
  }, [currentIdx]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((currentIdx) => (currentIdx + 1) % 3);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIdx]);
  return (
    <S.Carousel>
      <div className="carouselInner">
        <div ref={carouselRef} className="carousels">
          {imageUrls.map((item: ICarouselItem, index: number) => (
            <Link to={`/product/${item.id}`} key={index}>
              <img key={index} src={item.url} className="carousel" id="imgc1" loading="lazy" />
              {/* <video
                className="carousel"
                poster="캐러셀 이미지"
                src={item.url}
                autoPlay
                loop
              ></video> */}
            </Link>
          ))}
        </div>
      </div>
      <div className="carouselButton">
        {imageUrls.map((_, index: number) => (
          <S.CarouselDot key={index}>
            <button
              className={index === currentIdx ? 'dot-white' : 'dot-gray'}
              id={`btn${index}`}
              onClick={() => onClick(index)}
            >
              <h4>{index}</h4>
            </button>
          </S.CarouselDot>
        ))}
      </div>
    </S.Carousel>
  );
};

export default Carousel;
