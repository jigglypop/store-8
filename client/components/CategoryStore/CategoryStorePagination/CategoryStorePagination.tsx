import { useCategory } from '@client/hooks/category/category';
import PaginationItem from './PaginationItem';
import * as S from './style';

export const distance = 1600;
// 카테고리 페이지네이션(최대 페이지 개수 계산하고 만들어줌)
export default function CategoryStorePagination() {
  const { pages } = useCategory();
  return (
    <S.CategoryPagination>
      <div className="pagination-inner">
        {pages.map((item: number, key: number) => (
          <PaginationItem num={item} key={key} />
        ))}
      </div>
    </S.CategoryPagination>
  );
}
