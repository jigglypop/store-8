import * as S from './style';

import Card from '@components/Card/Card';
import NoData from '@components/NoData/NoData';

import { Link } from '@client/utils/router';
import { useRouter } from '@client/hooks/router/router';
import { useSearch } from '@client/hooks/search/search';
import { IProduct } from '@server/models/Product';

interface IsearchComponent {
  cards: IProduct[] | undefined;
  title: string;
}

function Search({ cards, title }: IsearchComponent) {
  const { router, query } = useRouter();
  const { search } = useSearch();

  return (
    <S.Search>
      <div className="main-inner">
        <div className="title">
          <div className="search-inner">
            <div className="search-name">
              <h4>검색: {title === '' ? decodeURI(query.title) : title}</h4>
            </div>
            <div className="search-name">{router && <h4>검색 결과 : {search?.count}개</h4>}</div>
          </div>
        </div>
        {search?.count ? (
          <div className="content">
            {cards &&
              cards.map((item: IProduct, index: number) => (
                <Card key={index} index={index} item={item} />
              ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </S.Search>
  );
}
export default Search;
