import { Link } from "react-router-dom";
import * as S from "./style";

interface IHeaderItem {
  item: string;
}
const HeaderItem = ({ item }: IHeaderItem) => {
  return (
    <S.HeaderItem>
      <Link to="/auth">{item}</Link>
      <span></span>
    </S.HeaderItem>
  );
};

export default HeaderItem;
