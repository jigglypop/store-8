import styled from "styled-components";

export const SmallWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
  position: relative;
`;

export const SmallImage = styled.div`
  width: 90vw;
  overflow: hidden;
  vertical-align: middle;
`;

export const SmallText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 30px;
    font-weight: 800;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 30px;
    }
  }
`;