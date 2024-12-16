import { useState } from "react";
import { PRIMARY_COLOR, WHITE } from "../../theme/palette";
import { Link } from "react-scroll";
import styled from "styled-components";
import lpLogo from "../../assets/LP-logo.svg";
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const NAVBAR_LABELS = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Technologies", id: "technologies" },
    { label: "About me", id: "about-me" },
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
      <div
        className={
          showMenu
            ? "navbar-buttons-container active"
            : "navbar-buttons-container"
        }
      >
        {NAVBAR_LABELS.map(({ label, id }, index) => (
          <div key={id}>
            <Link
              style={{
                color: isbuttonSelected(index) ? PRIMARY_COLOR : WHITE,
                fontWeight: "normal",
              }}
              to={id}
              spy
              smooth
              duration={500}
              onSetActive={() => {
                setSelectedSectionIndex(index);
                setShowMenu(false);
              }}
              className="navbar-button"
              offset={id === "projects" ? -110 : id === "projects" ? -150 : 0}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
      <div className="menu-button" onClick={() => setShowMenu(!showMenu)}>
        <HiMiniBars3 />
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
  backdrop-filter: blur(10px);
  font-weight: lighter;
  background-color: rgba(20, 20, 20, 0.3);

  .menu-button {
    cursor: pointer;
    display: none;
  }

  .navbar-buttons-container {
    background-color: transparent;
    display: flex;
    gap: 40px;
    transition: all ease 0.3s;
  }

  @media (max-width: 700px) {
    justify-content: space-around;
    gap: 200px;

    .navbar-buttons-container {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      width: 300px;
      height: 60vh;
      top: 60px;
      right: -400px;
      z-index: 30;
      border-bottom-left-radius: 20px;
      transition: all ease 0.3s;
    }

    .navbar-buttons-container.active {
      right: 0;
      background-color: rgba(4, 4, 33, 1);
    }

    .menu-button {
      display: block;
    }
  }

  .navbar-button {
    cursor: pointer;
    transition: color ease 0.2s;
  }
`;
