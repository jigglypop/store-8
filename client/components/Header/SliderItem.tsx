import { ICategory } from '@server/models/Category';
import { Link } from '../../utils/router';
import * as S from './style';

interface ISliderItem {
  item: ICategory;
}
const SliderItem = ({ item }: ISliderItem) => {
  return (
    <S.SliderItem>
      <Link
        to={`/category/${item.id}/?page=1&order=1`}
        className="slider-item"
        id={`link-${item.id}`}
      >
        {item.title}
      </Link>
    </S.SliderItem>
  );
};

export default SliderItem;
