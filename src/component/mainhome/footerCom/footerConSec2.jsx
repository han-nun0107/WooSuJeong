function FooterConSec2() {
  return (
    // 푸터 섹션 2 컨테이너
    <div
      className="
        no-underline
      "
    >
      {/* 개인정보 처리방침 링크 */}
      <div
        className="
          text-white 
          group
        "
      >
        <a
          href="#"
          className="
            group-hover:underline 
            text-white
          "
        >
          개인정보 처리방침
        </a>
      </div>
      {/* 접근성 표시 정보 링크 */}
      <div
        className="
          text-white 
          group
        "
      >
        <a
          href="#"
          className="
            group-hover:underline 
            text-white
          "
        >
          접근성 표시 정보
        </a>
      </div>
    </div>
  );
}

export default FooterConSec2;
