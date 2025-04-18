import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Etc from "./Etc";
import Info from "./info";

function Layout() {
  return (
    <>
      <header className="bg-black h-13 w-[100%] z-50 fixed">
        <div className="grid grid-cols-[1fr_1fr_0.3fr] items-center h-full">
          <div className=" text-2xl font-black">
            <Link to="/home" className="header-link text-white ml-[1%]">
              YouTube
            </Link>
          </div>
          <div className="flex relative text-2xl font-black ml-[60%] w-fit group">
            <p className="text-white dark:text-white cursor-pointer">Menu</p>
            <ul className="absolute hidden group-hover:flex group-hover:flex-col top-full bg-white dark:bg-black text-black dark:text-white text-center z-10 list-none p-0 shadow-lg">
              <Link
                to="/home"
                className="header-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="header-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Etc
              </Link>
              <Link
                to="/Info"
                className="header-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Info
              </Link>
            </ul>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="toggle" className="hidden peer" />
            <label
              htmlFor="toggle"
              className="inline-block w-[3.125rem] h-[1.5625rem] bg-[#ccc] rounded-[1.5625rem] relative cursor-pointer 
        transition-colors duration-300 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-[1.3125rem]
         after:h-[1.3125rem] after:bg-white after:rounded-[50%] after:transition-transform after:duration-300 
         peer-checked:after:translate-x-[1.5625rem] peer-checked:bg-[#4caf50]"
            ></label>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Etc />} />
          <Route path="/Info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
