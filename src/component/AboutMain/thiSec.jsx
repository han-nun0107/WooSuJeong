import { projects } from "../../assets/data/data";

export default function ThiSec() {
  return (
    // 프로젝트 섹션
    <section
      className="
      w-full min-h-screen 
      bg-[#f5f5f5] text-[#1a1a1a] 
      grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] 
      items-center justify-center  
      text-4xl font-bold
    "
    >
      {projects.map((project) => (
        // 프로젝트 카드 컨테이너
        <div
          key={project.id}
          className="
            ml-[1%] mr-[1%] 
            mt-[2%] mb-[2%]
          "
        >
          {/* 프로젝트 링크 */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block 
              rounded-lg 
              overflow-hidden 
              shadow-lg 
              group
              hover:shadow-xl 
              transition-shadow duration-300
            "
          >
            {/* 프로젝트 이미지 */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full 
                h-48 
                object-cover
              "
            />
            {/* 프로젝트 정보 */}
            <div
              className="
              p-4 
              bg-[#f5f5f5] 
              dark:bg-gray-800
            "
            >
              {/* 프로젝트 제목 */}
              <h3
                className="
                text-xl 
                font-semibold 
                text-[#1a1a1a] 
                dark:text-white 
                group-hover:underline
              "
              >
                {project.title}
              </h3>
              {/* 프로젝트 설명 */}
              <p
                className="
                text-sm 
                text-[#1a1a1a] 
                dark:text-gray-300 
                mt-2
              "
              >
                {project.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
