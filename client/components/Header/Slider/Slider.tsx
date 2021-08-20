import * as S from '../style';
import { useEffect, useRef, useState } from 'react';
import { ICategory } from '@server/models/Category';
import { $ } from '@client/utils/jQurey';
import SliderItem from './SliderItem';
import { categoryset } from '../categoryset';
import Picker from '../Dark/Picker';

export interface ISlider {
  isLeft: number;
  isUp: boolean;
  setIsLeft: React.Dispatch<React.SetStateAction<number>>;
}

interface ISliderOne {
  key: number;
  name: string;
}
const Slider = ({ isLeft, setIsLeft, isUp }: ISlider) => {
  const header = useRef<HTMLDivElement>(null);
  const [sliderTwo, setSliderTwo] = useState({ id: 0, isSlide: false });

  window.addEventListener('scroll', () => {
    if (header.current) {
      if (window.scrollY >= 60) {
        header.current.classList.add('up');
      } else {
        header.current.classList.remove('up');
      }
    }
  });
  useEffect(() => {
    $('.slider-outer-one').on('mouseover', (e: any) => {
      if (e.target.className === 'slider-outer-one-inner') {
        setIsLeft(150);
        setSliderTwo({
          id: 0,
          isSlide: true,
        });
      } else if (e.target.className === 'slider-one-item') {
        setIsLeft(300);
        setSliderTwo({
          id: Number(e.target.id.split('-')[1]),
          isSlide: false,
        });
      }
    });
  }, []);
  const categoryArray = [];
  for (let key of [0, 1, 2, 3]) {
    categoryArray.push({
      key: key,
      name: categoryset[key].name,
    });
  }
  return (
    <div className="slider-all">
      <S.Slider isLeft={isLeft} isUp={isUp} className="slider-outer slider-outer-one">
        <div className="slider-picker">
          <Picker />
        </div>
        <div className="slider-outer-one-inner">
          {categoryArray.map((item: ISliderOne, index: number) => (
            <S.SliderItem key={index}>
              <div className="slider-one-item" id={`link-${item.key}`}>
                {item.name}
              </div>
            </S.SliderItem>
          ))}
        </div>
      </S.Slider>
      <S.SliderTwo isLeft={isLeft} isUp={isUp} className="slider-outer slider-outer-two">
        <div className="slider-inner">
          {categoryset[sliderTwo.id]?.data.map((item: ICategory, index: number) => (
            <SliderItem key={index} item={item} />
          ))}
        </div>
      </S.SliderTwo>
    </div>
  );
};

export default Slider;
