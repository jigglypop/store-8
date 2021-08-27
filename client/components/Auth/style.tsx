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
    width: 300px;
    box-sizing: border-box;

    border-style: solid;
    border: 2px solid var(--black);
    border-radius: 5px;
    background: var(--gray1);
    color: var(--text-white);
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

export const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60vw;
  min-height: 80vh;
  padding: 20px;

  .error-msg {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 22px;
    color: #ff416c;
    font-size: 12px;
  }
  span {
    color: var(--text-picker);
    font-weight: 800;
  }
  h1 {
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 35px;
    font-weight: 800;
    color: var(--text-black-dark);
  }
  .text-goto {
    color: var(--text-black-dark);
    margin: 0 0 10px 0;
    cursor: pointer;
  }
  .auth-title {
    font-family: 'Do Hyeon';
    font-size: 80px;
    font-weight: 800;
    color: var(--text-picker);
    text-shadow: var(--shadow-picker);
    margin: 10px;
  }
`;

export const Error = styled.div`
  h3 {
    color: #ff416c;
    font-size: 13px;
    margin: 20px;
  }
`;

export const LogoText = styled.div`
  transform: scale(1.4);
  margin-bottom: 20px;
  /* img {
    width: 300px;
  } */
  svg {
    .mainHorizontal_svg__letter {
      fill: var(--text-picker);
    }
    .mainHorizontal_svg__letter.mainHorizontal_svg__later-dark {
      fill: var(--text-black-dark);
    }
  }
`;
export const FormButton = styled.button`
  margin: 10px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background: var(--text-picker);
  cursor: pointer;
`;

export const GitHub = styled.button`
  margin: 10px;
  width: 300px;
  height: 50px;
  background-color: var(--gray5);
  padding: 10px;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`;
