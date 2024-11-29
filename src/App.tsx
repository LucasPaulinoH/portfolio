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
import { FONT_SIZES } from "./utils/fontSizes";
import { GiBrazilFlag } from "react-icons/gi";
import ReadCVButton from "./components/readCvButton";
import {
  BRIGHTER_GRADIENT_COLOR,
  DARKER_GRADIENT_COLOR,
  PRIMARY_COLOR,
} from "./theme/palette";
import GlobalStyles from "./theme/globalStyles";
import Modal from "./components/projectModal";
import { useEffect, useState } from "react";

function App() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProjectToExpand, setSelectedProjectToExpand] = useState(0);

  useEffect(() => {
    console.log(selectedProjectToExpand);
  }, [selectedProjectToExpand]);

  const presentationSection = (
    <Section id="about-me" style={{ gap: "10px" }}>
      <div>
        <h1 style={{ fontSize: FONT_SIZES[0] }}>
          Hello there, i'm{" "}
          <span
            style={{
              background: `linear-gradient(155deg, ${BRIGHTER_GRADIENT_COLOR}, ${PRIMARY_COLOR} 50%, ${DARKER_GRADIENT_COLOR})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Lucas Paulino
          </span>
        </h1>

        <div className="subtitle-container">
          <h1 style={{ fontSize: FONT_SIZES[1], fontWeight: "normal" }}>
            Computer scientist based in Brazil
          </h1>
          <GiBrazilFlag size={35} />
        </div>
      </div>
      <div className="self-description-container">
        <p></p>
      </div>
      <ReadCVButton />
    </Section>
  );

  const technologiesSection = (
    <Section id="technologies">
      <h1 style={{ fontSize: FONT_SIZES[2] }}>Technologies</h1>
      <TechnologiesGrid style={{ width: "80%" }}>
        {TECHNOLOGY_ICONS.map((item, index) => (
          <Technology tecInfo={item} key={index} />
        ))}
      </TechnologiesGrid>
    </Section>
  );

  const projectsSection = (
    <Section id="projects">
      <h1 style={{ fontSize: FONT_SIZES[2] }}>Main projects</h1>

      <ProjectContainer>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              setShowProjectModal(true);
              setSelectedProjectToExpand(index);
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              images={project.images}
              technologies={project.technologies}
            />
          </div>
        ))}
      </ProjectContainer>
    </Section>
  );

  const contactSection = (
    <Section id="contact" style={{ gap: "30px", marginTop: "-30px" }}>
      <h1 style={{ fontSize: FONT_SIZES[2] }}>Contacts</h1>
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
    <Main>
      <GlobalStyles />
      <Modal showModal={showProjectModal} setShowModal={setShowProjectModal} />
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        className="background-video"
      />
      <div className="content" style={{ fontSize: FONT_SIZES[3] }}>
        <Navbar />
        {presentationSection}
        {technologiesSection}
        {projectsSection}
        {contactSection}
        <Footer />
      </div>
    </Main>
  );
}

export default App;

const Main = styled.div`
  :-webkit-scrollbar {
    display: none;
  }
  overflow: hidden;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  .subtitle-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .self-description-container {
    width: 70%;
    text-align: justify;
  }
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
