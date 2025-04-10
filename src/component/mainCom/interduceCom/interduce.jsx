import "./interduce.css";
import InterduceCom from "./interduceCom";

function Interduce() {
  return (
    <>
      <div className="main_sub_con grid">
        <h1 id="main_sub_con_h1 " className="font_color">
          소개
        </h1>
        <div className="main_sub_con__div grid">
          <InterduceCom iframeID={"sub_con_iframe1"} />
          <InterduceCom iframeID={"sub_con_iframe2"} />
          <InterduceCom iframeID={"sub_con_iframe3"} />
        </div>
      </div>
    </>
  );
}

export default Interduce;
