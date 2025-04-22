import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Etc from "./Etc";
import Info from "./info";

// 레이아웃 컴포넌트 (헤더와 아웃렛을 포함)
function Layout() {
  return (
    <>
      {/* 헤더 */}
      <header
        className="
          fixed 
          z-50 
          w-full 
          h-13 
          bg-black
        "
      >
        {/* 헤더 내부 그리드 */}
        <div
          className="
            grid 
            grid-cols-[1fr_1fr_0.3fr] 
            items-center 
            h-full
          "
        >
          {/* 로고 */}
          <div
            className="
              text-2xl 
              font-black
            "
          >
            <Link
              to="/home"
              className="
                ml-[1%] 
                text-white 
                transition-all 
                duration-300 
                ease-in 
                hover:text-gray-500
              "
            >
              WooSu Jeong
            </Link>
          </div>
          {/* 메뉴 */}
          <div
            className="
              flex 
              relative 
              text-2xl 
              font-black 
              ml-[60%] 
              w-auto 
              group
            "
          >
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
                group-hover:flex 
                group-hover:flex-col 
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
                w-[7rem]
              "
            >
              <Link
                to="/home"
                className="
                  hover:underline
                "
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              <li>
                <a
                  href="https://han-nun0107.github.io/"
                  className="
                    hover:underline
                  "
                >
                  깃 블로그
                </a>
              </li>
              <Link
                to="/Info"
                className="
                  hover:underline
                "
                onClick={() => window.scrollTo(0, 0)}
              >
                Info
              </Link>
            </ul>
          </div>
          {/* 토글 버튼 */}
          <div
            className="
              flex 
              items-center
            "
          >
            <input
              type="checkbox"
              id="toggle"
              className="
                hidden 
                peer
              "
            />
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
        </div>
      </header>
      <Outlet />
    </>
  );
}

// 메인 앱 컴포넌트
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
