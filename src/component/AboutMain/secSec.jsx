import SkillBar from "./About/skill";

export default function SecSec() {
  return (
    // 스킬 섹션
    <section
      className="
      moveCard 
      w-full h-screen 
      bg-[#2c2c2c] 
      text-[#fafaf8] 
      flex flex-col items-center justify-center  
      font-bold
    "
    >
      {/* 섹션 제목 */}
      <p
        className="
        text-6xl 
        mb-[5%]
      "
      >
        Skill
      </p>

      {/* 스킬 바 목록 */}
      <SkillBar name="HTML5" percent="70" />
      <SkillBar name="CSS" percent="70" />
      <SkillBar name="JavaScript" percent="50" />
      <SkillBar name="React" percent="30" />
      <SkillBar name="TypeScript" percent="0" />
      <SkillBar name="SCSS" percent="30" />
      <SkillBar name="TailWindCss" percent="50" />
      <SkillBar name="Github" percent="50" />
    </section>
  );
}
