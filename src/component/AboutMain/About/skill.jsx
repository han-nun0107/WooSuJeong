function SkillBar({ name, percent }) {
  return (
    // 스킬 바 컨테이너
    <div
      className="
      flex items-center 
      gap-4 mb-4 
      w-[90%]
    "
    >
      {/* 스킬 이름 */}
      <span
        className="
        w-35 
        text-2xl font-medium 
        text-[#fafaf8]
      "
      >
        {name}
      </span>

      {/* 스킬 바 배경 */}
      <div
        className="
        flex-1 
        bg-gray-200 
        h-8 
        rounded-full
      "
      >
        {/* 스킬 바 진행도 */}
        <div
          className="
            h-8 
            rounded-full 
            text-xl 
            flex justify-end 
            text-gray-100 
            bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500
          "
          style={{ width: `${percent}%\u00a0` }}
        >
          {percent > 0 ? `${percent}%\u00a0` : ""}
        </div>
      </div>

      {/* 스킬 퍼센트 표시 */}
      <span
        className="
        w-12 
        text-2xl 
        text-[#fafaf8] 
        text-right
      "
      >
        {percent}%
      </span>
    </div>
  );
}

export default SkillBar;
