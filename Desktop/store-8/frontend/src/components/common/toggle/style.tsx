import styled, { keyframes } from "styled-components";

const slideOff = keyframes`
  0% {
    transform: translateX(40px) scale(1);
  }
  100% {
    transform: translateX(0) scale(1);
  }
`
const slideOn = keyframes`
  0% {
    transform: translateX(0) scale(1);
  }
  100% {
    transform: translateX(40px) scale(1);
  }
`
export const ToggleDiv = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ToggleContainerDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 200px;
`

export const BallDiv = styled.div`
  background: #fff;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  align-items: center;
  justify-content: center;
  animation: ${slideOff} 0.3s linear forwards;
`
export const Label = styled.label`
  position: relative;
  background:#494949;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin: 0 15px 0;
  width: 60px;
  height: 20px;
`;

export const CheckBoxDiv = styled.input`
  visibility: hidden;
  &:checked + ${Label} {
    .ball{
        animation: ${slideOn} 0.3s linear forwards;
    }
  }
`;