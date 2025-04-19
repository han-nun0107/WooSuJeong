import TypeIt from "typeit-react";

function FirstSec() {
  return (
    <>
      <section className="moveCard w-full h-screen bg-red-400 flex flex-col justify-center items-center text-white text-4xl font-bold gap-8">
        <div className="text-center -translate-y-[10%] min-h-[6rem] text-3xl text-balance">
          <TypeIt
            options={{
              strings: ["안녕하세요!", "주니어 FrontEnd 개발자 정우수 입니다."],
              speed: 100,
              loop: true,
              breakLines: true,
            }}
          />
        </div>
        <div className=" text-center text-[1rem] text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            minus quas voluptatibus est quos assumenda modi, ratione ullam
            dignissimos perspiciatis ex asperiores sint aperiam eligendi quo
            deserunt consectetur placeat quae!
          </p>
        </div>
        <div className="grid grid-cols-2 border border-white w-[100rem] h-[30rem]">
          <div className="flex items-center justify-center border border-black">
            123
          </div>
          <div className="flex items-center justify-center border border-blue-500">
            456
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstSec;
