import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import styled from 'styled-components';

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
  const sectionName = {
    DetailInfo: '상품상세정보',
    productOtherInfo: '상세정보',
    review: '후기',
    question: '문의',
  };
  const handleSectionNavClick = (e: React.MouseEvent) => {
    const target = e.target;
    if (!target || !(target instanceof HTMLElement)) return;
    const detailSection = target.closest('.detail__section');
    if (!(detailSection instanceof HTMLDivElement)) return;
    setSection(detailSection?.dataset.id);
  };

  return (
    <SSectionNav onClick={handleSectionNavClick}>
      <div className="detail__section" data-id="DetailInfo">
        상품상세정보
      </div>
      <div className="detail__section" data-id="deliveryInfo">
        배송안내
      </div>
      <div className="detail__section" data-id="refundInfo">
        교환 및 반품안내
      </div>
      <div className="detail__section" data-id="review">
        상품후기 <span>{reviewCount}</span>
      </div>
      <div className="detail__section" data-id="question">
        상품문의 <span>{questionCount}</span>
      </div>
    </SSectionNav>
  );
}

const SSectionNav = styled.div``;
