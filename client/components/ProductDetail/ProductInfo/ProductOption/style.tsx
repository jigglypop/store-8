import styled from 'styled-components';

export const ProductOption = styled.div`
  display: flex;
  align-items: center;
  .option__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 380px;
    padding: 3px 9px 3px 24px;
    border: 1px solid var(--line-gray-dark);
    & > div {
      display: flex;
      align-items: cen;
      padding-top: 5px;
    }
    .option__down-arrow {
      width: 36px;
      height: 36px;
      fill: var(--text-pastel-black-dark);
    }
  }
`;

export const ProductOptionItem = styled.div``;

export const InfoTitle = styled.div`
  width: 150px;
  color: var(--text-gray-dark);
`;
