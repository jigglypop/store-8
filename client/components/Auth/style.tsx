import styled from '@lib/styledComponent';
//import { styled as _styled } from "../../utils/styled-component"

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
