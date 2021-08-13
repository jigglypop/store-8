import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  reviewCount: number;
  questionCount: number;
  section: number;
  setSection: Dispatch<SetStateAction<number>>;
}

export default function SectionNav({
  reviewCount,
  questionCount,
  section,
  setSection,
}: Props): ReactElement {
  const SECTION = ['상품상세정보', '배송안내', '교환 및 반품안내', '상품후기', '상품문의'];

  const sectionList = SECTION.map((item, idx) => {
    const className = idx === section ? 'detail__section selected' : 'detail__section';
    if (item === '상품후기') {
      return (
        <li key={item} className={className} data-id={idx}>
          {item} <span>{reviewCount}</span>
        </li>
      );
    }
    if (item === '상품문의') {
      return (
        <li key={item} className={className} data-id={idx}>
          {item} <span>{questionCount}</span>
        </li>
      );
    }
    return (
      <li key={item} className={className} data-id={idx}>
        {item}
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
    setSection(+sectionNo);
  };

  return <SSectionNav onClick={handleSectionNavClick}>{sectionList}</SSectionNav>;
}

const SSectionNav = styled.ul`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: var(--gray6);
  color: var(--text-pastel-black);
  border: 1px solid var(--gray6);
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    flex: 1;
    & > span {
      margin-left: 8px;
      color: var(--text-mint);
    }
  }
  .selected {
    background-color: var(--background-white);
  }
`;
