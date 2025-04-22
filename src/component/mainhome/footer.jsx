import FooterConHead from "./footerCom/footerConHead";
import FooterConSec1 from "./footerCom/footerConSec1";
import FooterConSec2 from "./footerCom/footerConSec2";
import FooterConSec3 from "./footerCom/footerConSec3";
import FooterConSec4 from "./footerCom/footerConSec4";

function Footer() {
  return (
    // 푸터 컨테이너
    <footer
      className="
      grid 
      gird-rows-[3fr_1fr] 
      bg-[#36454f] 
      h-75
    "
    >
      {/* 푸터 섹션 그리드 */}
      <div
        className="
        grid 
        grid-cols-[1fr_1fr_1fr_1.5fr] 
        mt-[2%] 
        ml-[2%]
      "
      >
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
