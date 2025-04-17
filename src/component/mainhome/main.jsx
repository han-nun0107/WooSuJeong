import MainDisplay from "./mainCom/main_display";
import Interduce from "./mainCom/interduceCom/interduce";
import Page from "./mainCom/pageCom/page";
import Instagram from "./mainCom/instaCom/insta";

function Main() {
  return (
    <main className="grid grid-rows-[1fr_1fr_1.5fr]">
      <MainDisplay />
      <Interduce />
      <Page />
      <Instagram />
    </main>
  );
}

export default Main;
