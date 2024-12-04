export interface IProjectCard {
  images: string[];
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export const projects: IProjectCard[] = [
  {
    images: [
      "https://drive.google.com/thumbnail?id=1eXcoRruJqYqax29_47gNfT4WbHONI7N8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ff_xz8OEexRl1YaqZdxOV73DYPFNnBec=w1000",
    ],
    title: "Demandoria",
    description: "A marketplace for pet, beauty and turism services.",
    technologies: ["React JS", "TypeScript", "Firebase"],
    link: "https://demandoria.com/",
  },
  {
    images: [
      "https://drive.google.com/thumbnail?id=1eXcoRruJqYqax29_47gNfT4WbHONI7N8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ff_xz8OEexRl1YaqZdxOV73DYPFNnBec=w1000",
    ],
    title: "Tarefando App",
    description:
      "A mobile app for academic tasks tracking focus on primary education and tutoring.",
    technologies: ["React Native", "TypeScript"],
    link: "https://github.com/LucasPaulinoH/Tutoring-School-Mobile",
  },
  {
    images: [
      "https://drive.google.com/thumbnail?id=1eXcoRruJqYqax29_47gNfT4WbHONI7N8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ff_xz8OEexRl1YaqZdxOV73DYPFNnBec=w1000",
    ],
    title: "Tarefando API",
    description:
      "A mobile app for academic tasks tracking focus on primary education and tutoring.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Firebase"],
    link: "https://github.com/LucasPaulinoH/Tutoring-School-API",
  },
  {
    images: [
      "https://drive.google.com/thumbnail?id=1eXcoRruJqYqax29_47gNfT4WbHONI7N8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ff_xz8OEexRl1YaqZdxOV73DYPFNnBec=w1000",
    ],
    title: "3DViewer",
    description: "DirectX app that provides 3d object transformations.",
    technologies: ["C++", "DirectX"],
    link: "https://github.com/LucasPaulinoH/3D-Viewer",
  },
  {
    images: [
      "https://drive.google.com/thumbnail?id=1eXcoRruJqYqax29_47gNfT4WbHONI7N8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ff_xz8OEexRl1YaqZdxOV73DYPFNnBec=w1000",
    ],
    title: "Image Playground",
    description: "A web app that provides digital image processing techniques.",
    technologies: ["React JS", "TypeScript"],
    link: "https://imageplaygroundlp.vercel.app/",
  },
];
