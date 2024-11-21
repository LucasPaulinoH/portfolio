import { CSSProperties } from "react";
import backgroundVideo from "./assets/background.mp4";
import Navbar from "./components/navbar";
import ContactCard from "./components/contact";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

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
  } as CSSProperties,

  contactsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 100,
    marginTop: "50px",
  } as CSSProperties,
};
