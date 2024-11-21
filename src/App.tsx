import { CSSProperties } from "react";
import backgroundVideo from "./assets/background.mp4";
import Navbar from "./components/navbar";
import ContactCard from "./components/contact";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import brasilIcon from "./assets/brasil-icon.png";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";
import Technology from "./components/technology";

function App() {
  const presentationSection = (
    <section id="about-me" style={styles.generalSection}>
      <h1>Hello there, i'm Lucas Paulino!</h1>
      <p></p>
    </section>
  );

  const tecnologiesSection = (
    <section id="technologies" style={styles.generalSection}>
      <h1>Technologies</h1>
      <div style={styles.technologiesGrid}>
        <Technology icon={<SiJavascript />} label="JavaScript" />
        <Technology icon={<SiTypescript />} label="TypeScript" />
        <Technology icon={<FaJava />} label="Java" />
        <Technology icon={<SiCplusplus />} label="C++" />
        <Technology icon={<SiC />} label="C" />
        <Technology icon={<SiReact />} label="React JS" />
        <Technology icon={<SiReact />} label="React Native" />
        <Technology icon={<SiSpring />} label="Spring Boot" />
      </div>
    </section>
  );

  const projectsSection = (
    <section id="projects" style={styles.generalSection}>
      <h1>Projects</h1>
    </section>
  );

  const contactSection = (
    <section id="contact" style={styles.generalSection}>
      <h1>Contacts</h1>
      <div style={styles.contactsContainer}>
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
      </div>
    </section>
  );

  const footer = (
    <section style={styles.footer}>
      <img src={brasilIcon} alt="Brazil icon" style={styles.brazilIcon} />
      <h5 style={{ fontWeight: "normal" }}>
        Lucas Paulino © {new Date().getFullYear()}
      </h5>
    </section>
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
        {tecnologiesSection}
        {projectsSection}
        {contactSection}
        {footer}
      </div>
    </div>
  );
}

export default App;

const styles = {
  generalSection: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
  } as CSSProperties,

  technologiesGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(130px, 100%), 1fr))",
    rowGap: 5,
    columnGap: 5,
  } as CSSProperties,

  contactsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 100,
    marginTop: "50px",

    "@media:max-width(750px)": {
      flexDirection: "column",
    },
  } as CSSProperties,

  footer: {
    width: "100%",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  } as CSSProperties,

  brazilIcon: {
    width: "30px",
    height: "30px",
  } as CSSProperties,
};

const globalMediaStyle = `
  @media (max-width: 750px) {
    .contacts-container {
      flex-direction: column;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = globalMediaStyle;
document.head.appendChild(styleSheet);
