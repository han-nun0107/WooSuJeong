import { troubleShooter } from "../../assets/data/trouble";

export default function ForSec() {
  return (
    <section
      className="
        w-full min-h-screen 
        bg-[#ffffff] text-[#1a1a1a] 
        px-4 py-12
      "
    >
      <h2 className="text-4xl font-bold text-center mb-10">트러블 슈팅</h2>

      {/* 카드 그리드 */}
      <div
        className="
          grid 
          grid-cols-4
          gap-6 
          mx-auto
        "
      >
        {troubleShooter.map((troble) => (
          <div
            key={troble.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <a
              href={troble.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={troble.image}
                alt={troble.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:underline">
                  {troble.title}
                </h3>
                <p className="text-sm text-[#1a1a1a] mt-2">
                  {troble.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">{troble.skill}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
