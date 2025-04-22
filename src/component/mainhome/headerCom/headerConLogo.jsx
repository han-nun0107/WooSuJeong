function HeaderConLogo() {
  return (
    // 로고 컨테이너
    <div
      className="
        text-2xl 
        font-black
      "
    >
      {/* 로고 링크 */}
      <a
        href="./index.html"
        className="
          text-white 
          dark:text-white 
          no-underline
        "
      >
        YouTube Portfolio
      </a>
    </div>
  );
}

export default HeaderConLogo;
