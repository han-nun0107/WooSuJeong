import gsap from "gsap";
import InterduceCom from "./interduceCom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Interduce() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".interduce-card");

    gsap.set(cards, { opacity: 0, y: 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <div className="grid grid-rows-[0.2fr_2.5fr] ml-[1%] mr-[1%]">
        <h1 className="text-white dark:text-black text-3xl  flex items-center">
          소개
        </h1>
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[15px]">
          <InterduceCom
            className="w-[100%] h-[100%] interduce-card"
            iframeID={"sub_con_iframe1"}
            videoId={"bT5p74Uf2HQ"}
          />
          <InterduceCom
            className="w-[100%] h-[100%] interduce-card"
            iframeID={"sub_con_iframe2"}
            videoId={"fOIcSbRNopU"}
          />
          <InterduceCom
            className="w-[100%] h-[100%] interduce-card"
            iframeID={"sub_con_iframe3"}
            videoId={"_afx_htxsnk"}
          />
        </div>
      </div>
    </>
  );
}

export default Interduce;
