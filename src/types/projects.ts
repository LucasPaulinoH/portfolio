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
    description: "A marketplace for pet, beauty and turism services.",
    technologies: ["React JS", "TypeScript", "Firebase"],
  },
  {
    images: images,
    title: "Tarefando",
    description:
      "A mobile app for academic tasks tracking focus on primary education and tutoring.",
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
      "A mobile app for academic tasks tracking focus on primary education and tutoring.",
    technologies: ["C++"],
  },
  {
    images: images,
    title: "Image Playground",
    description:
      "A mobile app for academic tasks tracking focus on primary education and tutoring.",
    technologies: ["React JS", "TypeScript"],
  },
];
