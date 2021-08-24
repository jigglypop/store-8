import React, { Dispatch, ReactElement, SetStateAction, useRef, useState, useEffect } from 'react';
import * as S from './style';

import {
  SECTION_DETAIL_KEY,
  SECTION_SEVERAL_KEY,
  SECTION_REVIEW_KEY,
  SECTION_QUESTION_KEY,
  SECTION_DETAIL_NAME,
  SECTION_SEVERAL_NAME,
  SECTION_REVIEW_NAME,
  SECTION_QUESTION_NAME,
} from '@constants/productDetail/productDetailSection/ProductDetailSection';

import { throttle } from '@client/utils/performance';

interface Props {
  reviewCount: number;
  questionCount: number;
  section: string;
  setSection: Dispatch<SetStateAction<string>>;
}

export default function SectionNav({
  reviewCount,
  questionCount,
  section,
  setSection,
}: Props): ReactElement {
  const SECTION = [
    { name: SECTION_DETAIL_NAME, key: SECTION_DETAIL_KEY },
    { name: SECTION_SEVERAL_NAME, key: SECTION_SEVERAL_KEY },
    { name: SECTION_REVIEW_NAME, key: SECTION_REVIEW_KEY },
    { name: SECTION_QUESTION_NAME, key: SECTION_QUESTION_KEY },
  ];
  const navRef = useRef<HTMLUListElement>(null);
  const [offsetTop, setOffsetTop] = useState(608);

  const sectionList = SECTION.map((item) => {
    const className = item.key === section ? 'detail__section selected' : 'detail__section';
    if (item.key === SECTION_REVIEW_KEY) {
      return (
        <li key={item.key} className={className} data-id={item.key}>
          {item.name} <span>{reviewCount}</span>
        </li>
      );
    }
    if (item.key === SECTION_QUESTION_KEY) {
      return (
        <li key={item.key} className={className} data-id={item.key}>
          {item.name} <span>{questionCount}</span>
        </li>
      );
    }
    return (
      <li key={item.key} className={className} data-id={item.key}>
        {item.name}
      </li>
    );
  });

  const handleSectionNavClick = (e: React.MouseEvent) => {
    const target = e.target;
    if (!target || !(target instanceof HTMLElement)) return;
    const detailSection = target.closest('.detail__section');
    if (!(detailSection instanceof HTMLLIElement)) return;
    const sectionNo = detailSection.dataset.id;
    if (!sectionNo) return;
    setSection(sectionNo);
  };

  const setNavPosition = throttle(() => {
    if (!navRef.current) return;

    const OFFSET_TOP = navRef.current.offsetTop;
    if (OFFSET_TOP > offsetTop) setOffsetTop(OFFSET_TOP);

    if (window.scrollY > offsetTop) {
      navRef.current.classList.add('fixed');
    } else {
      navRef.current.classList.remove('fixed');
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', setNavPosition);
    return () => window.removeEventListener('scroll', setNavPosition);
  }, []);

  return (
    <S.SectionNavWrapper>
      <S.SectionNav onClick={handleSectionNavClick} ref={navRef}>
        {sectionList}
      </S.SectionNav>
    </S.SectionNavWrapper>
  );
}
