import { headerBottom, headerTop } from "./headerConstant";
import HeaderItem from "./HeaderItem";
import { Link } from "../../utils/router";
import * as S from "./style";
import { useRef } from "react";
import { ICheckRes } from "@middle/type/auth/check";
import { HeaderLoggedIn, HeaderNotLoggedIn } from "./HeaderCheck"

export interface IHeader{
  check: ICheckRes | null
  onLogout: () =>  void
}
const Header = ({ check, onLogout } : IHeader) => {
  const header = useRef<HTMLDivElement>(null);
  window.addEventListener("scroll", () => {
    if (header.current) {
      if (window.scrollY >= 60) {
        header.current.classList.add("up");
      } else {
        header.current.classList.remove("up");
      }
    }
  });
  return (
    <S.Header>
      <div className="headerInner" ref={header}>
        {check ? <HeaderLoggedIn check={check} onLogout={onLogout}/> :  <HeaderNotLoggedIn />}
        <div className="mid">
          <Link to="/" >
            <img src="public/image/main.png" />
          </Link>
        </div>
        <div className="bottom">
          {headerBottom.map((item: string, index: number) => (
            <HeaderItem key={index} item={item} />
          ))}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
