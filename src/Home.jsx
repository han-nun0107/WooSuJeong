import ContactForm from "./component/AboutMain/email";
import FirstSec from "./component/AboutMain/firstSec";
import SecSec from "./component/AboutMain/secSec";
import ThiSec from "./component/AboutMain/thiSec";
import ForSec from "./component/AboutMain/forSec";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      },
    });
  }, []);

  return (
    <main>
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div className="parallax-wrapper">
          <FirstSec />
          <SecSec />
          <ThiSec />
        </div>
      </div>
      <ForSec />
      <ContactForm />
    </main>
  );
}

export default About;
