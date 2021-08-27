import * as S from './style';
import { Link } from '@utils/router';
import { IElastic } from '@middle/type/elastic/elastic';
import SearchGotoButton from '@image/svg/searchGotoIcon.svg';

type ElaItemProps = {
  item: IElastic;
};

export default function ElaItem({ item }: ElaItemProps) {
  const title = item._source.title;
  return (
    <Link to={`/search/0/?title=${title}&page=1`} className="search">
      <S.ElaItem className="search">
        <div className="search-button-container search">
          <SearchGotoButton className="search-button search" />
        </div>
        <div className="tag-container search">
          <p>{title}</p>
        </div>
      </S.ElaItem>
    </Link>
  );
}
