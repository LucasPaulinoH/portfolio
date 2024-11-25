import styled from "styled-components";
import backgroundVideo from "./assets/background.mp4";
import Navbar from "./components/navbar";
import ContactCard from "./components/contact";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Footer from "./components/footer";
import { projects } from "./types/projects";
import ProjectCard from "./components/projectCard";
import { TECHNOLOGY_ICONS } from "./types/technologyIcons";
import Technology from "./components/technology";

function App() {
  const presentationSection = (
    <Section id="about-me">
      <h1>Hello there, I'm Lucas Paulino!</h1>
      <button>Read CV</button>
    </Section>
  );

  const technologiesSection = (
    <Section id="technologies">
      <h1>Technologies</h1>
      <TechnologiesGrid>
        {TECHNOLOGY_ICONS.map((item, index) => (
          <Technology tecInfo={item} key={index} />
        ))}
      </TechnologiesGrid>
    </Section>
  );

  const projectsSection = (
    <Section id="projects" style={{  gap: "30px"}}>
      <h1>Projects</h1>
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
          />
        ))}
      </ProjectContainer>
    </Section>
  );

  const contactSection = (
    <Section id="contact">
      <h1>Contacts</h1>
      <ContactsContainer>
        <ContactCard
          icon={<MdOutlineEmail size={30} />}
          title="Email"
          content="lucaspaulinoh@hotmail.com"
          link="mailto:lucaspaulinoh@hotmail.com"
        />
        <ContactCard
          icon={<FiGithub size={30} />}
          title="GitHub"
          content="LucasPaulinoH"
          link="https://github.com/LucasPaulinoH"
        />
        <ContactCard
          icon={<FaLinkedinIn size={30} />}
          title="LinkedIn"
          content="lucas-paulino-6b174a15a"
          link="https://www.linkedin.com/in/lucas-paulino-6b174a15a/"
        />
      </ContactsContainer>
    </Section>
  );

  return (
    <div>
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        className="background-video"
      />
      <div className="content">
        <Navbar />
        {presentationSection}
        {technologiesSection}
        {projectsSection}
        {contactSection}
        <Footer />
      </div>
    </div>
  );
}

export default App;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const TechnologiesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(130px, 100%), 1fr));
  row-gap: 50px;
  column-gap: 5px;
`;

const ContactsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  width: 95%;
  box-shadow: -30px 0 30px -20px rgba(0, 0, 0, 0.6) inset,
    30px 0 30px -20px rgba(0, 0, 0, 0.6) inset;
  border-radius: 10px;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #1e3e62;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff204e;
  }
`;
