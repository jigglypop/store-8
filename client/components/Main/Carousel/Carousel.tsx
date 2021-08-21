import { Link } from '@client/utils/router';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { $, getPixelNumber } from '../../../utils/jQurey';
import * as S from './style';

interface ICarouselDot {
  index: number;
  currentIdx: number;
  setCurrentIdx: Dispatch<SetStateAction<number>>;
}
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
const CarouselDot = ({ index, currentIdx, setCurrentIdx }: ICarouselDot) => {
  const dotRef = useRef(null);
  const onClick = () => {
    setCurrentIdx(index);
  };
  return (
    <S.CarouselDot>
      <button
        className={index === currentIdx ? 'dot-white' : 'dot-gray'}
        id={`btn${index}`}
        ref={dotRef}
        onClick={onClick}
      >
        <h4>{index}</h4>
      </button>
    </S.CarouselDot>
  );
};

const Carousel = () => {
  // carousel의 ref
  const carouselRef = useRef<HTMLDivElement>(null);
  // 현재 선택된 index 값
  const [currentIdx, setCurrentIdx] = useState(0);
  // currentIdx가 바뀔 때
  useEffect(() => {
    // 짝수일때
    const carouselWidth = $('body').val('--carousel-width') || '0px';
    // 픽셀 변환
    const width = getPixelNumber(carouselWidth);
    const transform = `translateX(-${currentIdx * width}px)`;
    if (carouselRef.current) {
      carouselRef.current.style.transform = transform;
    }
  }, [currentIdx]);

  return (
    <S.Carousel>
      <div className="carouselInner">
        <div ref={carouselRef} className="carousels">
          {imageUrls.map((item: ICarouselItem, index: number) => (
            <Link to={`/product/${item.id}`} key={index}>
              <img key={index} src={item.url} className="carousel" id="imgc1" />
            </Link>
          ))}
        </div>
      </div>
      <div className="carouselButton">
        {imageUrls.map((_, index: number) => (
          <CarouselDot
            key={index}
            index={index}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx}
          />
        ))}
      </div>
    </S.Carousel>
  );
};

export default Carousel;
