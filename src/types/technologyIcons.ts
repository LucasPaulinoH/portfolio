import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiSpring,
  SiC,
  SiPostgresql,
  SiFirebase,
  SiStyledcomponents,
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
  { name: "Java", icon: FaJava, link: "https://docs.oracle.com/en/java/" },
  { name: "C++", icon: SiCplusplus, link: "https://cplusplus.com/doc/" },
  { name: "C", icon: SiC, link: "https://en.cppreference.com/w/c/language" },
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
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    link: "https://www.postgresql.org/docs/",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    link: "https://firebase.google.com/docs",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    link: "https://styled-components.com/docs",
  },
];
