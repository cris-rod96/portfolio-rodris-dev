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
