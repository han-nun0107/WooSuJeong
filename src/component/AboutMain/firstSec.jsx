import TypeIt from "typeit-react";

function FirstSec() {
  return (
    <>
      {/* 메인 섹션 */}
      <section
        className="
        moveCard 
        w-full h-screen 
        bg-[#1a1a1a] 
        flex flex-col justify-center items-center 
        text-[#fafaf8] text-4xl font-bold 
        gap-8
      "
      >
        {/* 인사말 섹션 */}
        <div
          className="
          text-center 
          -translate-y-[10%] 
          min-h-[6rem] 
          text-3xl 
          text-balance
        "
        >
          <TypeIt
            options={{
              strings: ["안녕하세요!", "주니어 FrontEnd 개발자 정우수 입니다."],
              speed: 100,
              loop: true,
              breakLines: true,
            }}
          />
        </div>

        {/* 자기소개 섹션 */}
        <div
          className="
          text-center 
          text-[1.1rem] 
          text-balance 
          text-[#fafaf8] 
          min-w-[1000px]
        "
        >
          <p>
            어릴 적부터 손으로 분해하고 조립하는 것을 좋아했던 저는, 이러한
            흥미를 바탕으로 문이과 융합 전공인 e-비즈니스 학과에 진학하게
            되었습니다.
          </p>
          <br />
          <p>
            다양한 IT 수업을 들으며 HTML5와 CSS에 특히 흥미를 느꼈고, 내가
            작성한 마크업이 화면에 반영되는 과정에서 코딩의 재미를 발견하게
            되었습니다. C#을 활용한 Unity 개발, 안드로이드 스튜디오를 이용한 앱
            개발 등도 경험했지만, 그중에서도 화면을 직접 설계하고 구현할 수 있는
            프론트엔드 분야에 더욱 매력을 느꼈습니다.
          </p>
          <br />
          <p>
            다양한 기술을 접하고 시도해 온 경험은 저에게 기술 스택을 유연하게
            다루는 능력을 길러주었습니다. 이를 바탕으로 상황에 맞는 기술을
            적용하고, 사용자 중심의 편리한 웹을 구현하는 프론트엔드 개발자로
            성장하고자 합니다.
          </p>
        </div>

        {/* 프로필 카드 섹션 */}
        <div
          className="
          grid grid-rows-[.1fr_.9fr] 
          bg-[#1a1a1a] 
          shadow-xl shadow-yellow-50/60 rounded-xl
          w-[70rem] h-[30rem]
        "
        >
          {/* 프로필 카드 헤더 */}
          <div
            className="
            flex items-center justify-center 
            text-[#fafafa8]
          "
          >
            ABOUT
          </div>

          {/* 프로필 카드 본문 */}
          <div className="grid grid-cols-[.35fr_.65fr]">
            {/* 프로필 이미지 */}
            <div
              className="
              flex items-center justify-center  
              text-[#fafaf8]
            "
            >
              <img
                src="/images/profile.jpg"
                alt=""
                className="rounded-[50%] h-[90%]"
              />
            </div>

            {/* 프로필 정보 */}
            <div
              className="
              flex flex-col items-center justify-center 
              text-[#fafaf8] text-[2rem]
            "
            >
              <ul
                className="
                flex flex-col items-start 
                gap-3 
                text-[2rem] 
                normal-case
              "
              >
                <li className={liFlex}>
                  <i className="fa-regular fa-user text-[2rem]"></i>
                  <span className="text-[#fafaf8]">정우수</span>
                </li>
                <li className={liFlex}>
                  <i className="fa-solid fa-cake-candles text-[2rem]"></i>
                  <span className="text-[#fafaf8]">1999.01.07</span>
                </li>
                <li className={liFlex}>
                  <i className="fa-solid fa-house text-[2rem]"></i>
                  <span className="text-[#fafaf8]">인천광역시 서구</span>
                </li>
                <li className={liFlex}>
                  <i className="fa-solid fa-envelope text-[2rem]"></i>
                  <span className="text-[#fafaf8]">spshspshek@gmail.com</span>
                </li>
                <li className={liFlex}>
                  <i className="fa-solid fa-graduation-cap text-[2rem]"></i>
                  <span className="text-[#fafaf8]">e-비즈니스학과</span>
                </li>
                <li className={liFlex}>
                  <a href="https://github.com/han-nun0107" className={liFlex}>
                    <i className="fa-brands fa-github text-[2rem]"></i>
                    <span className="hover:underline text-[#fafaf8]">Git</span>
                  </a>
                </li>
                <li className={liFlex}>
                  <a href="https://han-nun0107.github.io/" className={liFlex}>
                    <i className="fa-brands fa-github text-[2rem]"></i>
                    <span className="hover:underline text-[#fafaf8]">
                      Git Blog
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const liFlex = "flex items-center gap-20";

export default FirstSec;
