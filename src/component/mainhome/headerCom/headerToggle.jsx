function HeaderToggle({ darkMode, setDarkMode, toggleTheme }) {
  return (
    <div className="flex m-[10%] justify-center items-center">
      <input
        type="checkbox"
        id="toggle"
        className="hidden peer"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        onClick={toggleTheme}
      />
      <label
        htmlFor="toggle"
        className="inline-block w-[3.125rem] h-[1.5625rem] bg-[#ccc] rounded-[1.5625rem] relative cursor-pointer 
        transition-colors duration-300 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-[1.3125rem]
         after:h-[1.3125rem] after:bg-white after:rounded-[50%] after:transition-transform after:duration-300 
         peer-checked:after:translate-x-[1.5625rem] peer-checked:bg-[#4caf50]"
      ></label>
    </div>
  );
}

export default HeaderToggle;
