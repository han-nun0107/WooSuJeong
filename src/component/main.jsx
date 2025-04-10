import "./main.css";
import MainDisplay from "./mainCom/main_display";
import Interduce from "./mainCom/interduceCom/interduce";
import Page from "./mainCom/pageCom/page";
import Instagram from "./mainCom/instaCom/insta";

function Main() {
  return (
    <main className="main">
      <MainDisplay />
      <Interduce />
      <Page />
      <Instagram />
    </main>
  );
}

export default Main;
