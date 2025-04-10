import "../App.css";
import "./header.css";

import HeaderConLogo from "./headerCom/headerConLogo";
import HeaderMenu from "./headerCom/headerMenu";
import HeaderToggle from "./headerCom/headerToggle";

function header() {
  return (
    <header className="header">
      <div className="header_con">
        <HeaderConLogo />
        <HeaderMenu />
        <HeaderToggle />
      </div>
    </header>
  );
}

export default header;
