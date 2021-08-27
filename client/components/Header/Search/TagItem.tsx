import * as S from './style';
import { Link } from '@utils/router';
import SmallSearchButton from '@image/svg/smallSearchIcon.svg';
import SmallXButton from '@image/svg/smallX.svg';

type TagItemProps = {
  tag: string;
  onRemove: (tag: string) => void;
};

export default function TagItem({ tag, onRemove }: TagItemProps) {
  return (
    <Link to={`/search/0/?title=${tag}&page=1`} className="search">
      <S.TagItem className="search">
        <div className="search-button-container search">
          <SmallSearchButton className="search-button search" />
        </div>
        <div className="tag-container search">
          <p>{tag}</p>
          <SmallXButton onClick={() => onRemove(tag)} className="x-button search" />
        </div>
      </S.TagItem>
    </Link>
  );
}
