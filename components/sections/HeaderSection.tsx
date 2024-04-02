import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import profileImage from "/public/profile.jpg";
import { social } from "@/assets/data";
import Link from "next/link";

export const HeaderSection = () => {
  return (
    <section className="flex flex-col py-10 border-b border-gray-500/30 ">
      <div className="flex items-start justify-between">
        <div className="md:w-34 md:h-34 h-24 w-24  relative md:rounded-lg rounded-full border border-white mx-auto md:mx-0">
          <Image
            src={profileImage}
            alt="My profile Image"
            className="w-full h-full absolute object-cover md:rounded-lg rounded-full"
          />
        </div>
        <button className="flex items-center gap-1 px-5 py-2 bg-primary/25 text-primary hover:bg-primary/50 hover:text-white transition-all duration-300 md:relative absolute top-0 left-0 w-full md:w-auto justify-center">
          <GoDotFill />
          <span>Open to work</span>
        </button>
      </div>

      <div className="md:max-w-3xl mt-10 mb-14">
        <h3 className="md:text-4xl text-2xl text-wrap mb-5 [&>span]:text-primary [&>span]:font-light">
          Hola, me llamo <span>Cristhian</span>. Soy un{" "}
          <span>Backend Developer</span> && <span>Frontend</span> Explorer.
        </h3>
        <h5 className="text-gray-500 lg:text-lg text-wrap">
          Soy un Desarrollador Web especializado en el Backend, sin temor a
          enfrentarme al Frontend. Mi enfoque se centra en la creación de
          soluciones innovadoras y eficientes. En constante aprendizaje,
          ahupando las nuevas tendencias.
        </h5>
      </div>

      {/* Social NetWork */}
      <div className="flex items-center justify-center md:justify-start gap-2">
        {social.map((network) => (
          <Link
            href={network.href}
            key={network.href}
            target="__blank"
            className="px-5 py-3 border border-gray-500/30 bg-dark text-gray-500 rounded-lg hover:bg-gray-500/10 hover:text-white transition-all duration-300 rotate-3 hover:rotate-0"
          >
            <network.icon size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
};
