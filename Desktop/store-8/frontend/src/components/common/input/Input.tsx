import styled from "styled-components";

export const Input = styled.div`


  textarea {
    padding: 30px;
    background: #F5F5F5;
    background-clip: padding-box;
    width: 100%;
    font-size: 18px;
    color: black
  }

  input{
    font-size: 1rem;
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;

    border-style: solid;
    border-radius: 5px;

    border-image-slice: 1;
    background: none;
    border-color: white;
    color: white;
    caret-color: white;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
	  transition: background-color 5000s ease-in-out 0s;
	  -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px #141414 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
`;
