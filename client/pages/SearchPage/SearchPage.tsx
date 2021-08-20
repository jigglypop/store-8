import Search from '@client/components/Search/Search/Search';
import SearchPagination from '@client/components/Search/SearchPagination/SearchPagination';
import { useSearch } from '@client/hooks/search/search';
import * as S from './style';

const SearchPage = () => {
  const { search } = useSearch();
  return (
    <S.SearchPage>
      {search && (
        <>
          <Search cards={search.rows} />
          <SearchPagination page={search.count} />
        </>
      )}
    </S.SearchPage>
  );
};

export default SearchPage;
