import { ICategory } from '@server/models/Category';
import { Link } from '../../../utils/router';
import * as S from '../style';

interface IHeaderItem {
  item: ICategory;
}
const HeaderItem = ({ item }: IHeaderItem) => {
  return (
    <S.HeaderItem>
      <Link key={`/category/${item.id}/?page=1`} to={`/category/${item.id}/?page=1`}>
        {item.title}
      </Link>
    </S.HeaderItem>
  );
};

export default HeaderItem;
