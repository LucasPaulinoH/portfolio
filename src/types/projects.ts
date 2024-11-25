export interface IProjectCard {
  images: string[];
  title: string;
  description: string;
  technologies: string[];
}

const images = [
  "https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png",
  "https://miro.medium.com/v2/resize:fit:1200/1*ygwKSkZm99vBDJ8QFpXk4w.jpeg",
];

export const projects: IProjectCard[] = [
  {
    images: images,
    title: "Demandoria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus ex, lobortis vitae turpis in, efficitur condimentum diam. Duis vel iaculis neque. Nullam risus ex, lobortis vitae turpis in, efficitur condimentum diam.Nullam risus ex, lobortis vitae turpis in, efficitur condimentum diam.",
    technologies: ["React JS", "TypeScript", "Firebase"],
  },
  {
    images: images,
    title: "Tarefando",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus ex, lobortis vitae turpis in, efficitur condimentum diam. Duis vel iaculis neque.",
    technologies: [
      "React Native",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    images: images,
    title: "3DViewer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus ex, lobortis vitae turpis in, efficitur condimentum diam. Duis vel iaculis neque.",
    technologies: ["C++"],
  },
  {
    images: images,
    title: "Image Playground",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus ex, lobortis vitae turpis in, efficitur condimentum diam. Duis vel iaculis neque.",
    technologies: ["React JS", "TypeScript"],
  },
];
