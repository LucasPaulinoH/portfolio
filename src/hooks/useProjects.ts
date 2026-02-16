import tarefando1 from "../assets/projects/tarefando/app.png";
import treeDViewer1 from "../assets/projects/3dViewer/3d-viewer1.png";
import treeDViewer2 from "../assets/projects/3dViewer/3d-viewer2.png";
import ip1 from "../assets/projects/image-playground/ip1.png";
import mccHome from "../assets/projects/mcc/home.png";
import mccEnterpriseList from "../assets/projects/mcc/enterprisesList.png";
import mccDetails from "../assets/projects/mcc/details.png";
import peregrinHome from "../assets/projects/peregrin/home.png";
import peregrinMap from "../assets/projects/peregrin/map.png";
import peregrinExcursions from "../assets/projects/peregrin/excursions.png";
import turisgoHome from "../assets/projects/turisgo/home.png";
import { useTranslation } from "react-i18next";
import { IProjectCard } from "../types/projects";

export const useProjects = (): IProjectCard[] => {
  const { t } = useTranslation();

  return [
    {
      images: [mccHome, mccEnterpriseList, mccDetails],
      title: "Minha Casa Construída",
      description: t("projects.mcc"),
      technologies: ["Next JS", "TypeScript", "TailwindCSS"],
      link: "https://www.minhacasaconstruida.com/",
    },
    {
      images: [peregrinHome, peregrinMap, peregrinExcursions],
      title: "Peregrin",
      description: t("projects.peregrin"),
      technologies: ["React JS", "TypeScript", "Firebase", "Material UI"],
      link: "https://peregrin.demandoria.com/",
    },
    {
      images: [turisgoHome],
      title: "TurisGo",
      description: t("projects.turisgo"),
      technologies: [
        "Next JS",
        "TypeScript",
        "Prisma",
        "Docker",
        "Styled Components",
      ],
      link: "https://turisgo.app/",
    },
    {
      images: [tarefando1],
      title: "Tarefando App",
      description: t("projects.tarefando"),
      technologies: ["React Native", "TypeScript", "UI Kitten", "Firebase"],
      link: "https://github.com/LucasPaulinoH/Tutoring-School-Mobile",
    },
    {
      images: [ip1],
      title: "ImagePlayground",
      description: t("projects.imagePlayground"),
      technologies: ["React JS", "TypeScript", "Material UI"],
      link: "https://imageplaygroundlp.vercel.app/",
    },
    {
      images: [treeDViewer1, treeDViewer2],
      title: "3DViewer",
      description: t("projects.viewer3d"),
      technologies: ["C++", "DirectX"],
      link: "https://github.com/LucasPaulinoH/3D-Viewer",
    },
  ];
};
