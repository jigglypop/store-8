import * as S from './style';

import PaginationItem from './PaginationItem';

import { useSearch } from '@client/hooks/search/search';

interface ISearchPaginationComponent {
  page: number;
}
// 카테고리 페이지네이션(최대 페이지 개수 계산하고 만들어줌)
function SearchPagination({ page }: ISearchPaginationComponent) {
  const pages = Array.from({ length: Math.ceil(page / 20) }, (_, i) => i + 1);
  const { search } = useSearch();

  return (
    <S.SearchPagination>
      {search?.count !== 0 ? (
        <div className="pagination-inner">
          {pages.map((item: number, key: number) => (
            <PaginationItem num={item} key={key} />
          ))}
        </div>
      ) : (
        ''
      )}
    </S.SearchPagination>
  );
}
export default SearchPagination;
