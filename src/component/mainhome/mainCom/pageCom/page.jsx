import Interduce from "../interduceCom/interduce";

function Page() {
  return (
    <div className="grid grid-rows-[.1fr_1fr] grid-cols-[1fr_3fr_1fr]">
      <h1 className="col-span-3 ml-[1%] mt-[1%] text-white dark:text-black text-[2rem]">
        페이지
      </h1>
      <div></div>
      <div className="flex border border-white dark:border-black mb-[5%]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JQjnJ8ZAjzI?si=z7BFq7fv6reqg-tz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div></div>
    </div>
  );
}

export default Page;
