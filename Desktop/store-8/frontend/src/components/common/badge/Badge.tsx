import styled from "styled-components";

interface IconDiv {
    width? : string | null
    height? : string | null
    textColor?: string | null
    fontSize?: string | null
}

export const IconDiv = styled.div<IconDiv>`
  background: linear-gradient(45deg, #ff6a00, #ee0979);
  border-radius: 3px;

  h4 {
    color: ${(props) => props.textColor? props.textColor : 'white'};
    font-size: ${(props) => props.fontSize? props.fontSize : '12px'};
    padding: 5px;
    text-shadow: 2px 2px 20px white;
  }
  animation: blink 1s ease-in-out infinite alternate;

  @keyframes blink {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
