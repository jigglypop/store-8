import styled from "styled-components";
import { MainItem } from "../common/style";

export const MainNew = styled(MainItem)`
  position: relative;
  width: 100%;
  height: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;

  .mainNewInner {
    position: relative;
    width: 1200px;
    height: 100%;

    display: grid;
    grid-template-rows: 100px 1100px;
  }
`;
