import Main from "./component/mainhome/main";
import Footer from "./component/mainhome/footer";
function Home() {
  /*   const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); */

  return (
    <>
      <div className="grid bg-black dark:bg-black text-black dark:text-white ">
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;
