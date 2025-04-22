function HeaderMenu() {
  return (
    // 메뉴 컨테이너
    <div
      className="
        flex 
        relative 
        text-2xl 
        font-black 
        ml-[60%] 
        w-fit 
        group
      "
    >
      {/* 메뉴 버튼 */}
      <p
        className="
          text-white 
          dark:text-white 
          cursor-pointer
        "
      >
        Menu
      </p>
      {/* 드롭다운 메뉴 */}
      <ul
        className="
          absolute 
          hidden 
          group-hover:block 
          top-full 
          bg-white 
          dark:bg-black 
          text-black 
          dark:text-white 
          text-center 
          z-10 
          list-none 
          p-0 
          shadow-lg
        "
      >
        <MenuItem label="메뉴 1" href={"#"} />
        <MenuItem label="메뉴 2" href={"#"} />
        <MenuItem label="메뉴 3" href={"#"} />
        <MenuItem label="메뉴 4" href={"#"} />
        <MenuItem label="메뉴 5" href={"#"} />
      </ul>
    </div>
  );
}

// 메뉴 아이템 컴포넌트
const MenuItem = ({ label, href }) => (
  <li
    className="
      flex 
      justify-center 
      items-center 
      px-2.5 
      py-[15px] 
      w-34 
      h-8
    "
  >
    <a
      className="
        flex 
        justify-center 
        items-center 
        no-underline 
        hover:underline
      "
      href={href}
    >
      {label}
    </a>
  </li>
);

export default HeaderMenu;
