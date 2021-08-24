import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const SearchInner = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  transition: all 0.3s ease-in-out;

  height: 40px;
  width: 100px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px var(--black);
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
      color: var(--text-white);
      margin: 5px;
      font-size: 14px;
    }
  }
  input {
    font-size: 16px;
    outline: none;
    padding: 20px;
    height: 40px;
    width: 100px;
    box-sizing: border-box;
    color: var(--text-white);
    transition: all 0.3s ease-in-out;
  }

  &.wide {
    transform: translateY(40%);
    height: 300px;
    width: 200px;
    .elastic {
      min-width: 100px;
    }
    input {
      margin: 10px;
      width: 180px;
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
