import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

interface ExpandButtonProps {
  expandProjects: boolean;
  setExpandProjects: Dispatch<SetStateAction<boolean>>;
}

const ExpandButton = (props: ExpandButtonProps) => {
  const { expandProjects, setExpandProjects } = props;

  return (
    <Container
      onClick={() => setExpandProjects(!expandProjects)}
      style={{ marginTop: !expandProjects ? "-51px" : 0 }}
    >
      {!expandProjects ? (
        <h4 className="expand-label">
          Mostrar mais <FaChevronDown className="expand-chevron" />
        </h4>
      ) : (
        <Link
          to="projects"
          smooth
          spy
          duration={500}
          offset={-110}
          onClick={() => setExpandProjects(false)}
        >
          <h4 className="expand-label">
            Mostrar menos <FaChevronUp className="expand-chevron" />
          </h4>
        </Link>
      )}
    </Container>
  );
};

export default ExpandButton;

const Container = styled.div`
  cursor: pointer;
  z-index: 20;
  background: none;

  .expand-label {
    transition: all ease 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .expand-chevron {
    fill: var(--white);
    transition: all ease 0.3s;
  }

  &:hover .expand-chevron {
    fill: var(--primary);
  }

  &:hover .expand-label {
    color: var(--primary);
  }
`;
