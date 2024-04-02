import { RiMedalLine } from "react-icons/ri";
import { Container } from "../ui/Container";
import { Title } from "../ui/Title";
import { skills } from "@/assets/data";

export const SkillSection = () => {
  return (
    <Container>
      <Title IconTitle={RiMedalLine} text="Tech Skills" />

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] border border-gray-500/20 py-5">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none  animate-infinite-scroll">
          {skills.map((skill, idx) => (
            <li
              key={`skil-${idx}`}
              className="px-5 py-3 flex flex-col gap-2 justify-center items-center"
            >
              <skill.icon size={40} />
              {skill.label}
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll"
          aria-hidden="true"
        >
          {skills.map((skill, idx) => (
            <li
              key={`skil-${idx}`}
              className="px-5 py-3 flex flex-col gap-2 justify-center items-center"
            >
              <skill.icon size={40} />
              {skill.label}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
