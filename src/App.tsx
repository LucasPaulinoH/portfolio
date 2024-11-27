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
import { WHITE } from "./theme/palette";

function App() {
  const presentationSection = (
    <Section id="about-me">
      <div>
        <h1>Hello there, i'm</h1>
        <h1 style={{ fontSize: "50px" }}>Lucas Paulino</h1>
      </div>
      <div style={{ width: "40%", textAlign: "justify" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          pharetra eros, eu hendrerit urna. Praesent eget malesuada ante. Sed at
          lacus odio. Nam vel quam sit amet sem faucibus mattis. Morbi ut urna
          dolor.
        </p>
      </div>
      <ButtonContainer>
        <button>
          <h2 className="text">Read CV</h2>
        </button>
      </ButtonContainer>
    </Section>
  );

  const technologiesSection = (
    <Section id="technologies">
      <h1>Technologies</h1>
      <TechnologiesGrid style={{ width: "80%" }}>
        {TECHNOLOGY_ICONS.map((item, index) => (
          <Technology tecInfo={item} key={index} />
        ))}
      </TechnologiesGrid>
    </Section>
  );

  const projectsSection = (
    <Section id="projects">
      <h1>Main projects</h1>

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
    <Section id="contact" style={{ gap: "30px", marginTop: "-30px" }}>
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

const ButtonContainer = styled.div`
  button {
    align-items: center;
    background: linear-gradient(144deg, #fff480, #ff6500 50%, #ff8c32);
    border: 0;
    border-radius: 100px;
    box-shadow: rgba(255, 101, 0, 0.5) 0 2px 30px 5px;
    box-sizing: border-box;
    color: ${WHITE};
    display: flex;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
  }

  button:active,
  button:hover {
    outline: 0;
    box-shadow: rgba(255, 101, 0, 0.7) 0 2px 30px 7px;
  }

  button h2 {
    background-color: #040421;
    padding: 16px 24px;
    border-radius: 100px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  button:hover h2 {
    background: none;
  }

  button:active {
    transform: scale(0.9);
  }
`;

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
  justify-content: space-around;
  gap: 30px;
  overflow-x: auto;
  white-space: nowrap;
  width: 95%;
  backdrop-filter: blur(15px);
  padding: 30px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
