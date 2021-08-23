import styled from 'styled-components';

export const ProductCountForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 30px;
  border: 1px solid var(--line-gray-dark);
  border-radius: 3px;

  input {
    text-align: center;
    padding: 10px 0;
    width: 30px;
    padding-top: 12.5px;
    color: var(--text-black-dark);
  }
  .count-btn {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    stroke: var(--text-black-dark);
  }
`;
