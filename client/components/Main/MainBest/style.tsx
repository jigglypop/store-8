import styled from "styled-components";
import { MainItem } from "../common/style";

export const MainBest = styled(MainItem)`
  position: relative;
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;

  .mainBestInner {
    position: relative;
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-rows: 100px 500px;
  }
`;
