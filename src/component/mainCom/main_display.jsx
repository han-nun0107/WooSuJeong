import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./main_display.css";

function MainDisplay() {
  const leftConRef = useRef();
  const rightConRef = useRef();

  useEffect(() => {
    const Lel = leftConRef.current;
    const Rel = rightConRef.current;

    // 초기 상태 수동 설정
    gsap.set(Lel, { opacity: 0, y: 100 });

    gsap.to(Lel, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: Lel,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.set(Rel, { opacity: 0, y: 100 });

    gsap.to(Rel, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: Rel,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <div ref={leftConRef} className="main_con grid">
        <div className="main_logo_right">
          <img
            src="https://plus.unsplash.com/premium_photo-1673002092587-676a61e176b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVCJUIwJTk0JUVCJThCJUE0JTIwJUVEJTkyJThEJUVBJUIyJUJEfGVufDB8fDB8fHww"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div ref={rightConRef} className="main_logo_left">
          <img
            src="https://img.freepik.com/free-photo/man-jump-through-gaps-hills_1150-19693.jpg"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}

export default MainDisplay;
