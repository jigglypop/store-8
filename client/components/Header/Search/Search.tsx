import { ChangeEvent, useState, useEffect } from 'react';
import _ from 'lodash';

import cache from '@utils/cache';
import { $ } from '@utils/jQurey';
import { Link } from '@utils/router';
import { useElastic } from '@client/hooks/elastic/elastic';

import { IElastic } from '@middle/type/elastic/elastic';

import SearchIcon from '@image/svg/searchIcon.svg';
import TagItem from './TagItem';
import ElaItem from './ElaItem';

import * as S from './style';

const setTagFilter = (tag: string) => {
  let tags = cache.get('search');
  if (tags && tags.length) {
    if (tags.length >= 5) {
      tags.shift();
    }
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
  const { elastic, onElastic } = useElastic();
  const [search, setSearch] = useState('');
  const [isWide, setIsWide] = useState(false);
  const [tags, setTags] = useState([]);

  const onChange = _.throttle((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setSearch(e.target.value);
      onElastic(e.target.value);
    }
  }, 100);

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

  const isSvg = (e: any) => {
    // SVG 를 누른 경우 circle, rect가 눌린걸로 처리되는데, 이를 처리하기 위함.
    const myClassName: string = e.target.className.baseVal;
    const parentClassName: string = e.path[1] ? e.path[1].className.baseVal : '';
    const myClassList = myClassName?.length > 0 ? myClassName.split(' ') : [];
    const parentClassList = parentClassName?.length > 0 ? parentClassName.split(' ') : [];

    return myClassList.indexOf('search') !== -1 || parentClassList.indexOf('search') !== -1;
  };

  const isOutside = (e: any) => {
    if (e.target.className) {
      const classname: string = e.target.className;
      const classList = classname.length > 0 ? classname.split(' ') : [];
      if (classList.indexOf('search') === -1 && !isSvg(e)) {
        $('.search-inner').removeClass('wide');
        setIsWide(false);
        const inputs: any = $('#search-input').get();
        inputs.value = '';
        setSearch('');
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
    $('#search-icon').on('click', () => {
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
      <div className="search-fixer search">
        <S.SearchInner className="search-inner search">
          <div className="search-inner-input search" id="search-inner-input">
            <input
              name="search"
              placeholder="검색 입력"
              onKeyPress={onKeyPress}
              onChange={(e) => onChange(e)}
              id="search-input"
              autoComplete="off"
              className="search"
            />
            <SearchIcon onClick={onClick} id="search-icon" className="search-icon search" />
          </div>
          <div className="elastic">
            {isWide && elastic && elastic.length !== 0 && <p>{'연관 검색어'}</p>}
            {isWide &&
              elastic &&
              elastic
                .slice(0, 5)
                .map((item: IElastic, index: number) => <ElaItem item={item} key={index} />)}
          </div>
          <div className="tags search">
            {isWide && tags && <p>{'최근 검색어'}</p>}
            {isWide &&
              tags
                .slice(0)
                .reverse()
                .map((tag: string, index: number) =>
                  index < 3 ? <TagItem tag={tag} key={index} onRemove={onRemove} /> : <></>
                )}
          </div>
        </S.SearchInner>
        <Link to={`/search/0/?title=${search}&page=1`} id="search-route"></Link>
      </div>
    </S.Search>
  );
}
