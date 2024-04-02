import {
  RiCodeSSlashLine,
  RiHomeLine,
  RiMailLine,
  RiMedalLine,
  RiUserLine,
} from "react-icons/ri";

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
