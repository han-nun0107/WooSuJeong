import "./footer.css";
import FooterConHead from "./footerCom/footerConHead";
import FooterConSec1 from "./footerCom/footerConSec1";
import FooterConSec2 from "./footerCom/footerConSec2";
import FooterConSec3 from "./footerCom/footerConSec3";
import FooterConSec4 from "./footerCom/footerConSec4";

function Footer() {
  return (
    <footer className="footer grid">
      <div className="footer_con grid">
        <FooterConHead />
        <FooterConSec1 />
        <FooterConSec2 />
        <FooterConSec3 />
      </div>
      <FooterConSec4 />
    </footer>
  );
}

export default Footer;
