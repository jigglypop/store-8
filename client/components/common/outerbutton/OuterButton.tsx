import styled from "styled-components";

interface IOuterButton{
  borderColor?: string;
  width?: string;
  fontSize?: string
  borderSize?: string
}

const OuterButton = styled.button<IOuterButton>`
  transition: all .2s ease-in-out;
  transition: 0.5s;
  border: ${props => props.borderSize? props.borderSize : '2px'} solid ${props => props.borderColor? props.borderColor: '#FF416C'};
  background-color: transparent;
  h4 {
    font-size: ${props => props.fontSize? props.fontSize : '12px'};
    padding: 10px;
    color: ${props => props.borderColor? props.borderColor: '#FF416C'};
  }
  cursor: pointer;
  &:hover{
      background: ${props => props.borderColor? props.borderColor: '#FF416C'};
      transform: scale(1.1); 
      h4{
          color: black;
      }
  }
`;
export default OuterButton;