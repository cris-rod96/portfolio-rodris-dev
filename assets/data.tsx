import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  RiCodeSSlashLine,
  RiHomeLine,
  RiMailLine,
  RiMedalLine,
  RiUserLine,
  RiVideoLine,
} from "react-icons/ri";
import { TfiGithub } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";

import rickMortyProjectImage from "/public/rick-morty-project.png";
import { BsBrowserChrome } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import {
  SiAstro,
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiObsidian,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSequelize,
  SiSqlite,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export const menu = [
  {
    icon: RiHomeLine,
    to: "/home",
  },
  {
    icon: RiCodeSSlashLine,
    to: "/projects",
  },
  {
    icon: RiMedalLine,
    to: "/skills",
  },
  {
    icon: RiUserLine,
    to: "/about",
  },
  {
    icon: RiMailLine,
    to: "/contact",
  },
];

export const social = [
  {
    icon: TiSocialLinkedin,
    href: "https://linkedin.com/in/cristhian-rodriguez-659779205",
  },
  {
    icon: TfiGithub,
    href: "https://github.com/cris-rod96",
  },
  {
    icon: MdOutlineAlternateEmail,
    href: "mailto:crisrodam1996@gmail.com?subject=Charlemos",
  },
];

export const projects = [
  {
    title: "Rick & Morty Wiki",
    poster: rickMortyProjectImage,
    description: "",
    links: [
      {
        icon: BsBrowserChrome,
        href: "https://frontend-rick-morty-wiki.vercel.app/",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        href: "https://github.com/cris-rod96/frontend-rick-morty-wiki",
        label: "Code",
      },
      {
        icon: BiDetail,
        href: "",
        label: "Detalle",
      },
    ],
  },
  {
    title: "Rick & Morty Wiki",
    poster: rickMortyProjectImage,
    description: "",
    links: [
      {
        icon: BsBrowserChrome,
        href: "https://frontend-rick-morty-wiki.vercel.app/",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        href: "https://github.com/cris-rod96/frontend-rick-morty-wiki",
        label: "Code",
      },
      {
        icon: BiDetail,
        href: "",
        label: "Detalle",
      },
    ],
  },
  {
    title: "Rick & Morty Wiki",
    poster: rickMortyProjectImage,
    description: "",
    links: [
      {
        icon: BsBrowserChrome,
        href: "https://frontend-rick-morty-wiki.vercel.app/",
        label: "Deploy",
      },
      {
        icon: TfiGithub,
        href: "https://github.com/cris-rod96/frontend-rick-morty-wiki",
        label: "Code",
      },
      {
        icon: BiDetail,
        href: "",
        label: "Detalle",
      },
    ],
  },
];

export const skills = [
  {
    icon: SiJavascript,
    label: "Javascript",
  },
  {
    icon: SiHtml5,
    label: "HTML5",
  },
  {
    icon: SiCss3,
    label: "CSS3",
  },
  {
    icon: SiReact,
    label: "React.js",
  },
  {
    icon: SiNextdotjs,
    label: "Next.js",
  },
  {
    icon: SiTailwindcss,
    label: "TailwindCSS",
  },
  {
    icon: SiBootstrap,
    label: "BootstrapCSS",
  },
  {
    icon: SiAstro,
    label: "Astro",
  },
  {
    icon: SiExpress,
    label: "Express",
  },
  {
    icon: SiNodedotjs,
    label: "Node.js",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
  },
  {
    icon: SiMongodb,
    label: "MongoDB",
  },
  {
    icon: SiMongoose,
    label: "Mongoose",
  },
  {
    icon: SiPostgresql,
    label: "PostgreSQL",
  },
  {
    icon: SiMysql,
    label: "MySQL",
  },
  {
    icon: SiSequelize,
    label: "Sequelize",
  },
  {
    icon: SiSqlite,
    label: "Sqlite",
  },
  {
    icon: SiPrisma,
    label: "Prisma",
  },
  {
    icon: SiObsidian,
    label: "Obsidian",
  },
  {
    icon: SiGit,
    label: "Git",
  },
  {
    icon: SiGithub,
    label: "GitHub",
  },
  {
    icon: SiTrello,
    label: "Trello",
  },
  {
    icon: SiVisualstudiocode,
    label: "vscode",
  },
  {
    icon: SiPostman,
    label: "Postman",
  },
  {
    icon: SiInsomnia,
    label: "Insomnia",
  },
  {
    icon: SiPython,
    label: "Python",
  },
  {
    icon: DiJava,
    label: "Java",
  },
  {
    icon: SiPhp,
    label: "PHP",
  },
  {
    icon: SiCsharp,
    label: "C#",
  },
];
