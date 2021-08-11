import styled from "styled-components";
import { MainItem } from "../common/style";

export const MainSale = styled(MainItem)`
  height: 1200px;

  .mainSaleInner {
    position: relative;
    width: 1200px;
    height: 100%;

    display: grid;
    grid-template-rows: 100px 1100px;
  }
`;
