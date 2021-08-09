import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding:0 5vw;
  overflow: hidden scroll;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(45deg, #8E2DE2, #4A00E0);
      border-radius: 10px;
      background-clip: padding-box;
      border: 3px solid transparent;
  }
  &::-webkit-scrollbar-track {
      background-color:transparent;
  }
`;
