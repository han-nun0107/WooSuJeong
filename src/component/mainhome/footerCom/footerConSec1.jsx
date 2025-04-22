function FooterConSec1() {
  return (
    // 푸터 섹션 1 컨테이너
    <div
      className="
        no-underline
      "
    >
      <div>
        {/* 연락처 정보 */}
        <div
          className="
            text-white
          "
        >
          <p>
            <a
              href="tel:01088940034"
              className="
                hover:underline
              "
            >
              전화번호
            </a>
          </p>
          <p>
            <a
              href="mailto:spshspshek@gmail.com"
              className="
                hover:underline
              "
            >
              이메일
            </a>
          </p>
        </div>
        <br />
        {/* 주소 정보 */}
        <div
          className="
            text-white
          "
        >
          <p>서울특별시 종로구 종로0가 000-00</p>
        </div>
        <br />
        {/* 소셜 미디어 아이콘 */}
        <div
          className="
            flex
          "
        >
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

// 아이콘 스타일 상수
const Icon = "cursor-pointer mt-[2%] mr-[2.5%] text-white";

export default FooterConSec1;
