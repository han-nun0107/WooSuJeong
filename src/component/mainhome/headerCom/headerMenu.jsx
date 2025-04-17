function HeaderMenu() {
  return (
    <div className="flex relative text-2xl font-black ml-[60%] w-fit group ">
      <p className="text-white dark:text-white cursor-pointer">Menu</p>
      <ul className="absolute hidden group-hover:block top-full bg-white dark:bg-black text-black dark:text-white text-center z-10 list-none p-0 shadow-lg">
        <MenuItem label="메뉴 1" href={"#"} />
        <MenuItem label="메뉴 2" href={"#"} />
        <MenuItem label="메뉴 3" href={"#"} />
        <MenuItem label="메뉴 4" href={"#"} />
        <MenuItem label="메뉴 5" href={"#"} />
      </ul>
    </div>
  );
}

const MenuItem = ({ label, href }) => (
  <li className="flex justify-center items-center px-2.5 py-[15px] w-34 h-8">
    <a
      className="flex justify-center items-center no-underline hover:underline"
      href={href}
    >
      {label}
    </a>
  </li>
);

export default HeaderMenu;
