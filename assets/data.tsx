import { DiGithubAlt } from "react-icons/di";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  RiCodeSSlashLine,
  RiHomeLine,
  RiMailLine,
  RiMedalLine,
  RiUserLine,
} from "react-icons/ri";
import { TfiGithub } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";

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
