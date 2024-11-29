import { useState } from "react";
import { PRIMARY_COLOR, TERCIARY_COLOR, WHITE } from "../../theme/palette";
import { Link } from "react-scroll";
import styled from "styled-components";

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
    <Container>
      <div className="logo-container">
        <h2>LP</h2>
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
  height: 64px;
  width: 100%;
  align-self: start;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: WHITE;
  position: fixed;
  z-index: 2;
  background-color: rgba(11, 25, 44, 1);
  font-weight: lighter;

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
