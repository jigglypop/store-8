import { MainItem } from '@client/components/Main/common/style';
import styled from 'styled-components';

export const Search = styled(MainItem)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content.isNone {
    position: relative;
    width: 100%;
    min-width: 60vw;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.8);
    padding: 30px 20px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.8);

    h4 {
      font-size: 20px;
      font-weight: 800;
      color: var(--text-white);
    }

    .search-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .search-item {
      margin: 10px;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-white);
      cursor: pointer;
    }
    .search-item.isSelected {
      color: var(--text-picker);
    }
  }
`;
