function FooterConSec1() {
  return (
    <div className="no-underline">
      <div>
        <div className="text-white ">
          <p>
            <a href="tel:01088940034" className="hover:underline">
              전화번호
            </a>
          </p>
          <p>
            <a href="mailto:spshspshek@gmail.com" className="hover:underline">
              이메일
            </a>
          </p>
        </div>
        <br />
        <div className="text-white">
          <p>서울특별시 종로구 종로0가 000-00</p>
        </div>
        <br />
        <div className="flex">
          <div className={Icon}>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className={Icon}>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className={Icon}>
            <i className="fa-solid fa-link"></i>
          </div>
          <div className={Icon}>
            <i className="fa-solid fa-link"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const Icon = "cursor-pointer mt-[2%] mr-[2.5%] text-white";

export default FooterConSec1;
