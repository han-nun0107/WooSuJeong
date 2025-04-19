import { projects } from "../../assets/data/data";

export default function ThiSec() {
  return (
    <section className="w-full min-h-screen bg-green-400 grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] items-center justify-center text-white text-4xl font-bold">
      {projects.map((project) => (
        <div className="ml-[1%] mr-[1%] mt-[10%] mb-[1%]">
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:underline">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
