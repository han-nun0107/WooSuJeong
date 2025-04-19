function SkillBar({ name, percent }) {
  return (
    <>
      <div className="flex items-center gap-4 mb-4 w-[90%]">
        <span className="w-35 text-2xl font-medium text-gray-800">{name}</span>
        <div className="flex-1 bg-gray-200 h-8 rounded-full">
          <div
            className={`h-8 rounded-full text-xl flex justify-end text-gray-100 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500`}
            style={{ width: `${percent}%\u00a0` }}
          >
            {percent > 0 ? `${percent}%\u00a0` : ""}
          </div>
        </div>
        <span className="w-12 text-2xl text-gray-700 text-right">
          {percent}%
        </span>
      </div>
    </>
  );
}

export default SkillBar;
