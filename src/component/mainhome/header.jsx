import HeaderConLogo from "./headerCom/headerConLogo";
import HeaderMenu from "./headerCom/headerMenu";
import HeaderToggle from "./headerCom/headerToggle";

function Header({ darkMode, setDarkMode, toggleTheme }) {
  return (
    // 헤더 컨테이너
    <header
      className="
      grid 
      grid-rows-[3fr]  
      text-black 
      dark:text-white
    "
    >
      {/* 헤더 내부 그리드 */}
      <div
        className="
        grid 
        grid-cols-[1fr_1fr_0.3fr] 
        items-center 
        h-full 
        ml-[1%]
      "
      >
        <HeaderConLogo />
        <HeaderMenu />
        <HeaderToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleTheme={toggleTheme}
        />
      </div>
    </header>
  );
}

export default Header;
