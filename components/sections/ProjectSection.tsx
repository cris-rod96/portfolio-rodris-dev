import { projects } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import { DiGithubFull } from "react-icons/di";
import { FaGithubAlt } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { Title } from "../ui/Title";

export const ProjectSection = () => {
  return (
    <section className="flex flex-col py-10 border-b border-gray-500/30">
      <Title IconTitle={RiCodeSSlashLine} text="Proyectos" />
      {/* Projects */}

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:mb-10 mb-3">
        {projects.map((project) => (
          <div
            className="flex flex-col group cursor-pointer w-full mb-10 lg:mb-0"
            key={project.title}
          >
            <div className="w-full h-52 md:h-72 relative mb-2 overflow-hidden">
              <Image
                src={project.poster}
                alt="Project Image"
                className="w-full h-full object-cover absolute group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <h5 className="mb-3 tracking-widest text-sm opacity-50">
              Interactive Catalog
            </h5>
            <h3 className="text-xl text-gray-300 mb-4 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            {/* Buttons */}
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 ">
              {project.links.map((link) => (
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-5 py-3 border border-gray-500/30 rounded-lg text-sm text-gray-500 hover:bg-gray-500/10 hover:text-white transition-all duration-300 justify-center md:justify-start"
                  target="__blank"
                  key={link.href}
                >
                  <link.icon size={15} />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 flex items-center justify-center gap-2 border border-gray-500/30 text-gray-500 hover:text-white hover:bg-gray-500/10 transition-colors duration-300 ">
        <FaGithubAlt size={20} />
        <span className="uppercase font-bold ">Todos los proyectos</span>
      </button>
    </section>
  );
};
