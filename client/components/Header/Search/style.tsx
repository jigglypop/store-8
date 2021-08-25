import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .search-fixer {
    position: absolute;
    top: -21px;
    left: 0px;
  }
`;

export const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  transition: all 0.3s ease-in-out;

  height: 42px;
  width: 260px;
  border-radius: 20px;
  background: var(--background-search-black-dark);
  // box-shadow: 0 0 10px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .elastic {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: flex-start;

    .elastic-item {
      margin: 5px;
      font-size: 12px;
    }
  }

  .search-inner-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  input {
    font-size: 16px;
    outline: none;
    margin: 0px 10px;
    padding: 0px 12px;
    height: 42px;
    width: 240px;
    box-sizing: border-box;
    color: var(--text-white);
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: var(--text-placeholder-dark);
    }
  }

  .search-icon {
    position: absolute;
    right: 18px;
    circle {
      transition: fill 0.3s ease-in-out;
      stroke: var(--text-placeholder-dark);
      fill: var(--background-search-black-dark);
    }
    rect {
      fill: var(--text-placeholder-dark);
    }
  }

  &.wide {
    height: 300px;
    width: 260px;

    .elastic {
      min-width: 100px;
    }

    input {
      margin: 8px 10px;
      padding: 0px 12px;
      border-bottom: 2px solid var(--gray3);
    }

    .tag-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      font-size: 12px;
      margin: 5px;
      padding: 5px;
      background-color: var(--text-white);
      border-radius: 10px;
      color: var(--text-black);

      span {
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
`;
