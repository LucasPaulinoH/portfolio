import demandoria1 from "../assets/projects/demandoria/search.png";
import demandoria2 from "../assets/projects/demandoria/service.png";
import demandoria3 from "../assets/projects/demandoria/login.png";
import tarefando1 from "../assets/projects/tarefando/app.png";
import tarefando2 from "../assets/projects/tarefando/api.png";
import treeDViewer1 from "../assets/projects/3dViewer/3d-viewer1.png";
import treeDViewer2 from "../assets/projects/3dViewer/3d-viewer2.png";
import ip1 from "../assets/projects/image-playground/ip1.png";

export interface IProjectCard {
  images: string[];
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export const projects: IProjectCard[] = [
  {
    images: [demandoria1, demandoria2, demandoria3],
    title: "Demandoria",
    description: "A marketplace for pet and beauty services.",
    technologies: ["React JS", "TypeScript", "Firebase", "Material UI"],
    link: "https://demandoria.com/",
  },

  {
    images: [tarefando1],
    title: "Tarefando App",
    description:
      "A mobile app for academic tasks tracking focus on primary education and tutoring.",
    technologies: ["React Native", "TypeScript", "UI Kitten", "Firebase"],
    link: "https://github.com/LucasPaulinoH/Tutoring-School-Mobile",
  },
  {
    images: [tarefando2],
    title: "Tarefando API",
    description: "A REST API for integrated academic task management and tracking.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/LucasPaulinoH/Tutoring-School-API",
  },
  {
    images: [ip1],
    title: "Image Playground",
    description: "A web app that provides advanced digital image processing techniques.",
    technologies: ["React JS", "TypeScript", "Material UI"],
    link: "https://imageplaygroundlp.vercel.app/",
  },
  {
    images: [treeDViewer1, treeDViewer2],
    title: "3DViewer",
    description: "DirectX app that provides 3D object transformations.",
    technologies: ["C++", "DirectX"],
    link: "https://github.com/LucasPaulinoH/3D-Viewer",
  },
];
