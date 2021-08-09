import styled from "styled-components";

export const BlueButton = styled.button`
  background: linear-gradient(45deg, #8E2DE2 30%, #4A00E0 90%);
  border: 0;
  border-radius: 3px;
  padding: 5px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .3);
  color: white;
  font-weight:600;
  cursor: pointer;

  transition: all .2s ease-in-out;
  &:hover { 
    transform: scale(1.1); 
  }
`;
