import { CSSProperties, useState } from "react";
import { PRIMARY_COLOR, WHITE } from "../../theme/palette";
import { Link } from "react-scroll";

const Navbar = () => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  const NAVBAR_LABELS = [
    { label: "About me", id: "about-me" },
    { label: "Technologies", id: "technologies" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const isbuttonSelected = (index: number) => {
    return index === selectedSectionIndex;
  };

  return (
    <div style={styles.navbar} className="navbar">
      <div style={styles.logoContainer}>
        <h2>Lucas Paulino</h2>
      </div>
      <div style={styles.navbarButtonsContainer}>
        {NAVBAR_LABELS.map(({ label, id }, index) => (
          <div key={id}>
            <Link
              style={{
                ...styles.navbarButton,
                color: isbuttonSelected(index) ? PRIMARY_COLOR : WHITE,
                fontWeight: isbuttonSelected(index) ? "bold" : "normal",
              }}
              to={id}
              spy
              smooth
              duration={500}
              onSetActive={() => setSelectedSectionIndex(index)}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

const styles = {
  navbar: {
    height: "64px",
    width: "100%",
    alignSelf: "start",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    boxShadow: "inset 0 100px 200px rgba(0,0,0,0.3)",
    backdropFilter: "blur(10.0px)",
    color: WHITE,
    position: "fixed",
    zIndex: 2,
  } as CSSProperties,

  logoContainer: {
    cursor: "pointer",
  } as CSSProperties,

  navbarButtonsContainer: {
    display: "flex",
    gap: 40,
  } as CSSProperties,

  navbarButton: {
    cursor: "pointer",
    transition: "color 0.3s ease",
  } as CSSProperties,
};
