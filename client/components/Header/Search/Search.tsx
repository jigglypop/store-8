import cache from '@client/utils/cache';
import { $ } from '@client/utils/jQurey';
import { HistoryPush, Link } from '@client/utils/router';
import { ChangeEvent, FormEvent, useState, useEffect, useRef } from 'react';
import * as S from './style';

const setTagFilter = (tag: string) => {
  let tags = cache.get('search');
  if (tags && tags.length) {
    tags.push(tag);
  } else {
    tags = [tag];
  }
  cache.set('search', tags);
  return tags;
};

const removeTagFilter = (tag: string) => {
  let tags = cache.get('search');
  tags = tags.filter((_tag: string) => _tag !== tag);
  cache.set('search', tags);
  return tags;
};

export default function Search() {
  const [search, setSearch] = useState('');
  const [isWide, setIsWide] = useState(false);
  const [tags, setTags] = useState([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onClick = () => {
    if (search.length !== 0) {
      document.getElementById('search-route')?.click();
      setSearch('');
      const inputs: any = $('#search-input').get();
      inputs.value = '';
      const _tags = setTagFilter(search);
      setTags(_tags);
    }
  };

  const onRemove = (tag: string) => {
    const _tags = removeTagFilter(tag);
    setTags(_tags);
  };

  const onKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const isOutside = (e: any) => {
    if (e.target.className) {
      const classname: string = e.target.className;
      const classList = classname.split(' ');
      if (classList.indexOf('search') === -1) {
        $('.search-inner').removeClass('wide');
        setIsWide(false);
      }
    }
  };
  useEffect(() => {
    const tags = cache.get('search');
    if (tags && tags.length) {
      setTags(tags);
    } else {
      setTags([]);
    }
    $('#search-input').on('focus', () => {
      $('.search-inner').addClass('wide');
      setIsWide(true);
    });
    document.addEventListener('mousedown', isOutside);
    return () => {
      document.addEventListener('mousedown', isOutside);
    };
  }, []);
  return (
    <S.Search>
      <S.SearchInner className="search-inner search">
        <input
          name="search"
          placeholder="상품명 검색"
          onKeyPress={onKeyPress}
          onChange={(e) => onChange(e)}
          id="search-input"
          autoComplete="off"
          className="search"
        />
        <div className="tags search">
          {isWide &&
            tags.map((tag: string, index: number) => (
              <div className="tag-item search" key={index}>
                <Link to={`/search/0/?title=${tag}&page=1`} className="search">
                  {tag}
                </Link>
                <span onClick={() => onRemove(tag)} className="search">
                  x
                </span>
              </div>
            ))}
        </div>
      </S.SearchInner>
      <Link to={`/search/0/?title=${search}&page=1`} id="search-route"></Link>
    </S.Search>
  );
}
