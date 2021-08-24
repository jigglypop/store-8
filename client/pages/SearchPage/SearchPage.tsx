import Search from '@client/components/Search/Search/Search';
import SearchPagination from '@client/components/Search/SearchPagination/SearchPagination';
import { useSearch } from '@client/hooks/search/search';
import * as S from './style';

const SearchPage = () => {
  const { search, title } = useSearch();
  return (
    <S.SearchPage>
      {search && (
        <>
          <Search cards={search.rows} title={title} />
          <SearchPagination page={search.count} />
        </>
      )}
    </S.SearchPage>
  );
};

export default SearchPage;
