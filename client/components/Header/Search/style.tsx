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
  width: 42px;
  border-radius: 21px;
  background: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .tags {
    display: flex;
    flex-direction: column;

    & > p {
      text-align: start;
      margin: 6px 0px 6px 8px;
    }

    @media only screen and (min-width: 0px) {
      width: 105px;
      & > p {
        width: 101px;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 105px;
      & > p {
        width: 101px;
      }
    }
    @media only screen and (min-width: 768px) {
      width: 210px;
      & > p {
        width: 202px;
      }
    }
    @media only screen and (min-width: 1300px) {
      width: 210px;
      & > p {
        width: 202px;
      }
    }
  }

  .tags.search {
    color: var(--text-white);
  }

  .elastic {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;

    & > p {
      text-align: start;
      margin: 6px 0px 6px 8px;
    }

    @media only screen and (min-width: 0px) {
      width: 105px;
      & > p {
        width: 101px;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 105px;
      & > p {
        width: 101px;
      }
    }
    @media only screen and (min-width: 768px) {
      width: 210px;
      & > p {
        width: 202px;
      }
    }
    @media only screen and (min-width: 1300px) {
      width: 210px;
      & > p {
        width: 202px;
      }
    }
  }

  .search-inner-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  input {
    display: none;
    font-size: 14px;
    outline: none;
    margin: 0px 10px;
    padding: 0px 12px;
    height: 42px;
    width: 42px;
    box-sizing: border-box;
    color: var(--text-white);
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: var(--text-lightgray);
    }
  }

  .search-icon {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 8px;
    left: 8px;
    @media only screen and (min-width: 0px) {
      transform: scale(0.7);
    }
    @media only screen and (min-width: 375px) {
      transform: scale(0.7);
    }
    @media only screen and (min-width: 768px) {
      transform: scale(1);
    }
    @media only screen and (min-width: 1300px) {
      transform: scale(1);
    }
    circle {
      stroke: white;
      fill: transparent;
    }
    rect {
      fill: white;
    }
  }

  &.wide {
    @media only screen and (min-width: 0px) {
      height: 200px;
      width: 105px;
      margin-left: -10px;
    }
    @media only screen and (min-width: 375px) {
      height: 200px;
      width: 105px;
      margin-left: -10px;
    }
    @media only screen and (min-width: 768px) {
      height: 332px;
      width: 210px;
    }
    @media only screen and (min-width: 1300px) {
      height: 332px;
      width: 210px;
    }

    input {
      display: inherit;
      margin: 8px 10px;
      padding: 0px 12px;
      border-bottom: 2px solid var(--gray3);

      @media only screen and (min-width: 0px) {
        width: 95px;
      }
      @media only screen and (min-width: 375px) {
        width: 95px;
      }
      @media only screen and (min-width: 768px) {
        width: 190px;
      }
      @media only screen and (min-width: 1300px) {
        width: 190px;
      }
    }
    .search-icon {
      position: absolute;
      top: 11px;
      @media only screen and (min-width: 0px) {
        left: 75px;
        opacity: 0;
      }
      @media only screen and (min-width: 375px) {
        left: 75px;
        opacity: 0;
      }
      @media only screen and (min-width: 768px) {
        left: 170px;
      }
      @media only screen and (min-width: 1300px) {
        left: 170px;
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
