import styled from "styled-components";

export const RedButton = styled.button`
  background: linear-gradient(45deg, #FF416C 30%, #FF4B2B 90%);
  border: 0;
  border-radius: 3px;
  padding: 5px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .3);
  color: white;
  margin: 5px;
  font-weight:600;
  cursor: pointer;

  transition: all .2s ease-in-out;
  &:hover { 
    transform: scale(1.1); 
  }
`;
