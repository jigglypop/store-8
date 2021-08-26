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
  width: 250px;
  border-radius: 20px;
  background: var(--background-pastel-black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .tags {
    display: flex;
    flex-direction: column;
    width: 250px;
  }

  .elastic {
    display: flex;
    flex-direction: column;
    width: 250px;
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
    width: 230px;
    box-sizing: border-box;
    color: var(--text-white);
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: var(--text-lightgray);
    }
  }

  .search-icon {
    position: absolute;
    right: 18px;
    circle {
      stroke: white;
      fill: var(--background-pastel-black);
    }
    rect {
      fill: white;
    }
  }

  &.wide {
    height: 300px;
    width: 250px;
    overflow: scroll;

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

export const TagItem = styled.div`
  width: 100%;
  height: 32px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: var(--background-dark-gray);
    .x-button {
      right: 6px;
    }
  }

  .x-button {
    transition: right 0.3s;
    position: absolute;
    top: 6px;
    right: -12px;
    path {
      stroke: white;
    }
  }

  .search-button-container {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    margin: 2px 7px;

    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-button {
    circle {
      stroke: var(--background-pastel-black);
      fill: white;
    }
    rect {
      fill: var(--background-pastel-black);
    }
  }

  .tag-container {
    p {
      color: white;
    }
  }
`;

export const ElaItem = styled.div`
  width: 100%;
  height: 32px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: var(--background-dark-gray);
  }

  .search-button-container {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    margin: 2px 7px;

    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-button {
    path {
      stroke: var(--background-pastel-black);
      fill: white;
    }
  }

  .tag-container {
    p {
      color: white;
    }
  }
`;
