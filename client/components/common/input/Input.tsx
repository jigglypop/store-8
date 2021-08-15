import styled from 'styled-components';

export const Input = styled.div`
  textarea {
    padding: 30px;
    background: #f5f5f5;
    background-clip: padding-box;
    width: 100%;
    font-size: 18px;
    color: black;
  }

  input {
    font-size: 1rem;
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 300px;
    box-sizing: border-box;

    border-style: solid;
    border: 2px solid var(--black);
    border-radius: 5px;
    background: none;
    color: var(--black);
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px var(--gray1) inset !important;
    -webkit-text-fill-color: #fff !important;
  }
`;
