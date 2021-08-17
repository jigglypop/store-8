import PaginationItem from './PaginationItem';
import * as S from './style';

interface ICategoryPaginationComponent {
  page: number;
}
// 카테고리 페이지네이션(최대 페이지 개수 계산하고 만들어줌)
function CategoryPagination({ page }: ICategoryPaginationComponent) {
  const pages = Array.from({ length: Math.ceil(page / 20) }, (_, i) => i + 1);
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
export default CategoryPagination;
