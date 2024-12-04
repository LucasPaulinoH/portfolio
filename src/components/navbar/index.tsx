import { useState } from "react";
import { PRIMARY_COLOR, WHITE } from "../../theme/palette";
import { Link } from "react-scroll";
import styled from "styled-components";
import lpLogo from "../../assets/LP-logo.svg";

const Navbar = () => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  const NAVBAR_LABELS = [
    { label: "Home", id: "home" },
    { label: "About me", id: "about-me" },
    { label: "Projects", id: "projects" },
    { label: "Technologies", id: "technologies" },
    { label: "Contact", id: "contact" },
  ];

  const isbuttonSelected = (index: number) => {
    return index === selectedSectionIndex;
  };

  return (
    <Container>
      <div className="logo-container">
        <img
          src={lpLogo}
          alt="LP logo"
          style={{ width: "35px", height: "35px" }}
        />
      </div>
      <div className="navbar-buttons-container">
        {NAVBAR_LABELS.map(({ label, id }, index) => (
          <div key={id}>
            <Link
              style={{
                color: isbuttonSelected(index) ? PRIMARY_COLOR : WHITE,
                fontWeight: isbuttonSelected(index) ? "bold" : "normal",
              }}
              to={id}
              spy
              smooth
              duration={500}
              onSetActive={() => setSelectedSectionIndex(index)}
              className="navbar-button"
              offset={id === "projects" ? -110 : 0}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  width: 100%;
  align-self: start;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: WHITE;
  position: fixed;
  z-index: 2;
  backdrop-filter: blur(8px);
  font-weight: lighter;
  background-color: rgba(36, 36, 36, 0.5);

  .navbar-buttons-container {
    display: flex;
    gap: 40px;
  }

  .logo-container {
    cursor: pointer;
  }

  .navbar-button {
    cursor: pointer;
    transition: color ease 0.2s;
  }
`;
