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
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";

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
      <TechnologiesGrid style={{ width: "80%" }}>
        {TECHNOLOGY_ICONS.map((item, index) => (
          <Technology tecInfo={item} key={index} />
        ))}
      </TechnologiesGrid>
    </Section>
  );

  const projectsSection = (
    <Section id="projects">
      <h1>Projects</h1>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        initialSlide={1}
      >
        {projects.map((project, index) => (
          <SwiperSlide>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              technologies={project.technologies}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );

  const contactSection = (
    <Section id="contact" style={{ gap: "30px" }}>
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

const ProjectContainer = styled.div``;
