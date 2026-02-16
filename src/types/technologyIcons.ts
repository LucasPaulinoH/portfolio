import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiSpring,
  SiPostgresql,
  SiFirebase,
  SiStyledcomponents,
  SiMui,
  SiTailwindcss,
  SiStorybook,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";

export interface TecIcon {
  name: string;
  icon: IconType;
  link: string;
}

export const TECHNOLOGY_ICONS: TecIcon[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
  },
  { name: "React JS", icon: SiReact, link: "https://react.dev/learn" },
  {
    name: "React Native",
    icon: SiReact,
    link: "https://reactnative.dev/docs/intro-react",
  },
  {
    name: "Spring Boot",
    icon: SiSpring,
    link: "https://docs.spring.io/spring-boot/index.html",
  },
  { name: "Java", icon: FaJava, link: "https://docs.oracle.com/en/java/" },
  { name: "C++", icon: SiCplusplus, link: "https://cplusplus.com/doc/" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    link: "https://www.postgresql.org/docs/",
  },
  {
    name: "Docker",
    icon: SiDocker,
    link: "https://docs.docker.com/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    link: "https://storybook.js.org/",
  },
  {
    name: "Material UI",
    icon: SiMui,
    link: "https://mui.com/material-ui/getting-started/",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    link: "https://styled-components.com/docs",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    link: "https://firebase.google.com/docs",
  },
];
