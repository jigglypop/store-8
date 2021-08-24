import Search from '@client/components/Search/Search/Search';
import SearchPagination from '@client/components/Search/SearchPagination/SearchPagination';
import { useSearch } from '@client/hooks/search/search';
import * as S from './style';

const UsagePage = () => {
  const { search } = useSearch();
  return <S.UsagePage></S.UsagePage>;
};

export default UsagePage;
