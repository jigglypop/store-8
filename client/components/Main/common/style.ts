import styled from "styled-components";

// 각각 mainbest, mainnew 등의 컴포넌트가 상속받을 것
export const MainItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    grid-row: 1/2;
    h3 {
      font-weight: 600;
      letter-spacing: -0.3px;
      font-size: 26px;
      text-align: left;
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
