function HeaderToggle({ darkMode, setDarkMode, toggleTheme }) {
  return (
    // 토글 컨테이너
    <div
      className="
        flex 
        m-[10%] 
        justify-center 
        items-center
      "
    >
      {/* 토글 체크박스 (숨김) */}
      <input
        type="checkbox"
        id="toggle"
        className="hidden peer"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        onClick={toggleTheme}
      />
      {/* 토글 레이블 (스타일링된 토글 버튼) */}
      <label
        htmlFor="toggle"
        className="
          inline-block 
          w-[3.125rem] 
          h-[1.5625rem] 
          bg-[#ccc] 
          rounded-[1.5625rem] 
          relative 
          cursor-pointer 
          transition-colors 
          duration-300 
          after:content-[''] 
          after:absolute 
          after:top-0.5 
          after:left-0.5 
          after:w-[1.3125rem]
          after:h-[1.3125rem] 
          after:bg-white 
          after:rounded-[50%] 
          after:transition-transform 
          after:duration-300 
          peer-checked:after:translate-x-[1.5625rem] 
          peer-checked:bg-[#4caf50]
        "
      ></label>
    </div>
  );
}

export default HeaderToggle;
