function InterduceCom({ iframeID }) {
  return (
    <div id="main_sub_con__sec1" className="main_sub_con__sec grid">
      <div className="sub_con_img1" id={iframeID}></div>
      <div className="sub_con_p flex">
        <p className="font_color font_nick">정우수</p>
        <h3 className="font_color font_title">제목</h3>
        <p className="font_color sub_con_underLine">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          impedit fugit, officia esse veritatis deserunt eos molestiae. Sunt
          totam magni, magnam excepturi, nihil quibusdam voluptates atque cum
          quia sit dignissimos?
        </p>
        <div className="con2__sec2__icon flex">
          <i className="fa-regular fa-eye font_color"></i>
          <i className="fa-regular fa-heart red"></i>
        </div>
      </div>
    </div>
  );
}

export default InterduceCom;
