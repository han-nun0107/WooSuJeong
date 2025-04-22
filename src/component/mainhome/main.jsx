import MainDisplay from "./mainCom/main_display";
import Interduce from "./mainCom/interduceCom/interduce";
import Page from "./mainCom/pageCom/page";
import Instagram from "./mainCom/instaCom/insta";

function Main() {
  return (
    // 메인 컨테이너
    <main
      className="
      grid 
      grid-rows-[1fr_1fr_1.5fr] 
      h-[100%] 
      w-[100%] 
      text-black 
      dark:text-white
    "
    >
      <MainDisplay />
      <Interduce />
      <Page />
      <Instagram />
    </main>
  );
}

export default Main;
