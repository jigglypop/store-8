import Card from '@client/components/Card/Card';
import { useRouter } from '@client/hooks/router/router';
import { IProduct } from '@server/models/Product';
import * as S from './style';
import { Link } from '@client/utils/router';
import { useSearch } from '@client/hooks/search/search';
import NoData from '@client/components/NoData/NoData';

interface IsearchComponent {
  cards: IProduct[] | undefined;
}

function Search({ cards }: IsearchComponent) {
  const { router, query } = useRouter();
  const { search } = useSearch();

  return (
    <S.Search>
      <div className="main-inner">
        <div className="title">
          <div className="search-inner">
            <div className="search-name">
              <h4>검색: {decodeURI(query.title)}</h4>
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
