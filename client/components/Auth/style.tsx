import styled from 'styled-components';

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
    span {
      color: var(--text-black-picker);
    }
  }
`;

export const Error = styled.div`
  h3 {
    color: #ff416c;
    font-size: 13px;
    margin: 20px;
  }
`;

export const LogoText = styled.h2`
  font-size: 40px;
  margin: 20px;
  img {
    width: 300px;
  }
`;
export const FormButton = styled.button`
  margin: 10px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--mint);
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
