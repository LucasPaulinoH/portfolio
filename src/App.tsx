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
import ReadCVButton from "./components/readCvButton";
import {
  BRIGHTER_GRADIENT_COLOR,
  DARKER_GRADIENT_COLOR,
  PRIMARY_COLOR,
} from "./theme/palette";
import GlobalStyles from "./theme/globalStyles";
import { useState } from "react";
import ExpandButton from "./components/expandButton";

function App() {
  const [expandProjects, setExpandProjects] = useState(false);

  const presentationSection = (
    <Section id="home" style={{ gap: "10px" }}>
      <div style={{ textAlign: "center", margin: "0px 30px" }}>
        <h1 style={{ fontSize: FONT_SIZES[0] }}>
          Hello there, i'm{" "}
          <span
            style={{
              background: `linear-gradient(155deg, ${BRIGHTER_GRADIENT_COLOR}, ${PRIMARY_COLOR} 50%, ${DARKER_GRADIENT_COLOR})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lucas Paulino
          </span>
        </h1>

        <div className="subtitle-container">
          <h1 style={{ fontSize: FONT_SIZES[1], fontWeight: "normal" }}>
            Computer scientist based in Brazil
          </h1>
        </div>
      </div>
      <ReadCVButton />
    </Section>
  );

  const aboutMeSection = (
    <Section id="about-me">
      <h1 style={{ fontSize: FONT_SIZES[2] }}>About me</h1>
      <AboutMeContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sollicitudin vulputate dolor, vitae porta dolor aliquet quis.
          Vestibulum euismod sed elit at cursus. Pellentesque auctor tincidunt
          tempor. Nam a odio eu ante aliquet porta sit amet eu ligula. Sed
          placerat auctor sodales. Aenean ut dui at dui lacinia egestas sit amet
          sed eros. Quisque luctus auctor neque sed blandit. Morbi eget rutrum
          arcu. Praesent vitae nibh egestas, porttitor dolor sit amet, tincidunt
          dui. Nam tempor ex ut rutrum dapibus. Maecenas sed eros a leo suscipit
          placerat quis a mauris. Duis quis purus nec eros hendrerit luctus ac a
          enim. Phasellus mattis neque metus, ut mattis purus eleifend sit amet.
          Nunc efficitur scelerisque odio, sed pellentesque lectus rutrum quis.
          Pellentesque egestas gravida quam quis lacinia. Nulla malesuada massa
          ante, mollis eleifend ligula rutrum at.
        </p>
      </AboutMeContainer>
    </Section>
  );

  const technologiesSection = (
    <Section
      id="technologies"
      className="technologies"
    >
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

      <ProjectContainer
        style={{
          maskImage: !expandProjects
            ? "linear-gradient(to bottom,rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)"
            : "none",
        }}
      >
        {projects
          .filter((_, index) => (expandProjects === false ? index < 2 : _))
          .map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                images={project.images}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
      </ProjectContainer>
      <ExpandButton
        expandProjects={expandProjects}
        setExpandProjects={setExpandProjects}
      />
    </Section>
  );

  const contactSection = (
    <Section id="contact">
      <h1 style={{ fontSize: FONT_SIZES[2] }}>Connect with me</h1>
      <ContactIconsContainer>
        <ContactCard
          icon={<MdOutlineEmail size={30} />}
          content="Email"
          link="mailto:lucaspaulinoh@hotmail.com"
        />
        <ContactCard
          icon={<FiGithub size={30} />}
          content="GitHub"
          link="https://github.com/LucasPaulinoH"
        />
        <ContactCard
          icon={<FaLinkedinIn size={30} />}
          content="Linkedin"
          link="https://www.linkedin.com/in/lucas-paulino-6b174a15a/"
        />
      </ContactIconsContainer>
    </Section>
  );

  return (
    <Main>
      <GlobalStyles />

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
        {aboutMeSection}
        {projectsSection}
        {technologiesSection}
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

  .technologies{
    margin-top: 80px;
    margin-bottom: -200px;

    @media (max-width: 1000px) {
      margin-top: 200px;
      margin-bottom: 50px;
    }
  }
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

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

const AboutMeContainer = styled.div`
  margin: 0px 30px;
  text-align: justify;
`;

const ProjectContainer = styled.div`
  backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 80px;
  align-items: center;
  justify-content: center;
  row-gap: 60px;
  column-gap: 60px;

  @media (max-width: 880px) {
    grid-template-columns: 100%;
  }
`;

const TechnologiesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(130px, 100%), 1fr));
  row-gap: 50px;
  column-gap: 5px;
`;

const ContactIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
