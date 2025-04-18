import ContactForm from "./component/About/email";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeIt from "typeit-react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".parallax-wrapper .moveCard");

    gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + window.innerHeight * (sections.length - 1),
        markers: true,
      },
    });
  }, []);

  return (
    <main>
      {/* ✅ 1~3번: 패럴랙스 슬라이드 구간 */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div className="parallax-wrapper">
          <section className="moveCard w-full h-screen bg-red-400 flex flex-col justify-center items-center text-white text-4xl font-bold gap-8">
            <div className="text-center -translate-y-[10%] min-h-[6rem] text-3xl text-balance">
              <TypeIt
                options={{
                  strings: [
                    "안녕하세요!",
                    "주니어 FrontEnd 개발자 정우수 입니다.",
                  ],
                  speed: 100,
                  loop: true,
                  breakLines: true,
                }}
              />
            </div>
            <div className=" text-center text-[1rem] text-balance">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium minus quas voluptatibus est quos assumenda modi,
                ratione ullam dignissimos perspiciatis ex asperiores sint
                aperiam eligendi quo deserunt consectetur placeat quae!
              </p>
            </div>
            <div className="border border-white w-[100rem] h-[30rem]"></div>
          </section>

          <section className="moveCard w-full h-screen bg-blue-400 flex items-center justify-center text-white text-4xl font-bold">
            다룰 수 있는 프레임워크, 라이브러리 %로
          </section>
          <section className="moveCard w-full h-screen bg-green-400 flex items-center justify-center text-white text-4xl font-bold">
            결과물
          </section>
        </div>
      </div>

      {/* ✅ 4번부터: 일반 스크롤 영역 */}
      <section className="w-full h-screen bg-yellow-300 flex items-center justify-center text-black text-4xl font-bold">
        <ContactForm />
      </section>
      <section className="w-full h-screen bg-orange-300 flex items-center justify-center text-black text-4xl font-bold">
        05 - 일반 스크롤
      </section>
    </main>
  );
}

export default About;
