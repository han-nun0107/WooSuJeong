import "./App.css";
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <div className="container grid">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
