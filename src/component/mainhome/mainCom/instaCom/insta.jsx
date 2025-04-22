import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Instagram() {
  useEffect(() => {
    const insta = gsap.utils.toArray(".insta-card");

    gsap.set(insta, { opacity: 0 });

    gsap.to(insta, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: insta[0],
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const imgWH = "w-full h-full";

  return (
    <div className="grid grid-rows-[.5fr_5fr] mb-[1%] ml-[1%] mr-[1%]">
      <h1 className="text-[2rem] text-white dark:text-black">인스타그램</h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
        <div className="col-span-2 row-span-2 insta-card">
          <img src="/main-insta/1.jpg" alt="" className={imgWH} />
        </div>
        <div className="insta-card">
          <img src="/main-insta/2.jpg" alt="" className={imgWH} />
        </div>
        <div className="insta-card">
          <img src="/main-insta/3.jpg" alt="" className={imgWH} />
        </div>
        <div className="col-span-2 row-span-2 insta-card">
          <img src="/main-insta/4.jpeg" alt="" className={imgWH} />
        </div>
        <div className="insta-card">
          <img src="/main-insta/5.jpg" alt="" className={imgWH} />
        </div>
        <div className="insta-card">
          <img src="/main-insta/6.jpg" alt="" className={imgWH} />
        </div>
      </div>
    </div>
  );
}

export default Instagram;
