import Interduce from "../interduceCom/interduce";

function Page() {
  return (
    // 페이지 섹션 컨테이너
    <div
      className="
        grid 
        grid-rows-[.1fr_1fr] 
        grid-cols-[1fr_3fr_1fr]
      "
    >
      {/* 페이지 제목 */}
      <h1
        className="
          col-span-3 
          ml-[1%] 
          mt-[1%] 
          text-white 
          dark:text-black 
          text-[2rem]
        "
      >
        페이지
      </h1>
      <div></div> {/* 왼쪽 여백 */}
      {/* 유튜브 영상 iframe */}
      <div
        className="
          flex 
          border 
          border-white 
          dark:border-black 
          mb-[5%]
        "
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JQjnJ8ZAjzI?si=z7BFq7fv6reqg-tz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div></div> {/* 오른쪽 여백 */}
    </div>
  );
}

export default Page;
