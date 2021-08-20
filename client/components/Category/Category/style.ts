import { MainItem } from '@client/components/Main/common/style';
import styled from 'styled-components';

export const Category = styled(MainItem)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .category-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.8);
    padding: 15px 20px;
    border-radius: 20px;

    h4 {
      font-size: 16px;
      font-weight: 800;
      color: var(--text-picker);
    }

    .category-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .category-item {
      margin: 10px;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-white);
      cursor: pointer;
    }
    .category-item.isSelected {
      color: var(--text-picker);
    }
  }
`;
