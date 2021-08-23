import styled from 'styled-components';

interface ProductOptionProps {
  isOpen: boolean;
}

export const ProductOption = styled.div<ProductOptionProps>`
  background-color: var(--body-background-dark);
  display: flex;
  .option__box {
    background-color: var(--body-background-dark);
    position: relative;
    width: 380px;

    border: 1px solid var(--line-gray-dark);

    .option__box-title {
      background-color: var(--body-background-dark);
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 5px;
      padding: 3px 9px 3px 16px;
      border-bottom: ${({ isOpen }) => (isOpen ? '1px solid var(--line-gray-dark)' : 'none')};
      .option__down-arrow {
        width: 36px;
        height: 36px;
        fill: var(--tag-picker);
        transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};
      }
    }

    .option__selectable-wrapper {
      position: absolute;
      border: 1px solid var(--line-gray-dark);
      border-top: none;
      width: 380px;
      left: -1px;
      .selectable-item {
        background-color: var(--background-option-select);
        height: 44px;
        display: flex;
        align-items: center;
        padding-left: 16px;
        &:not(:last-child) {
          border-bottom: 1px solid var(--line-gray-dark);
        }
      }
      .selectable-item:hover {
        background-color: var(--text-pastel-black-reverse-dark);
      }
    }
  }

  .option__select-item {
    position: absolute;
    top: 42px;
    left: -1px;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 16px;
      border: 1px solid var(--line-gray-dark);
      &:not(:last-child) {
        border-bottom: none;
      }
    }
  }
`;

export const ProductOptionItem = styled.div``;

export const InfoTitle = styled.div`
  width: 150px;
  color: var(--text-gray-dark);
  padding-top: 14px;
`;
