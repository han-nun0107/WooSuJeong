import SkillBar from "./About/skill";

export default function SecSec() {
  return (
    <section className="moveCard w-full h-screen bg-blue-400 flex flex-col items-center justify-center text-white font-bold">
      <p className="text-6xl mb-[5%]">Skill</p>
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
