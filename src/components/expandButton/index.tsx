import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

interface ExpandButtonProps {
  expandProjects: boolean;
  setExpandProjects: Dispatch<SetStateAction<boolean>>;
}

const ExpandButton = (props: ExpandButtonProps) => {
  const { expandProjects, setExpandProjects } = props;

  return (
    <Container onClick={() => setExpandProjects(!expandProjects)}>
      {expandProjects === false ? (
        <p className="expand-label">Mostrar mais</p>
      ) : (
        <Link
          to="projects"
          smooth
          spy
          duration={400}
          offset={-110}
          onClick={() => setExpandProjects(false)}
        >
          Mostrar menos
        </Link>
      )}
    </Container>
  );
};

export default ExpandButton;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .expand-label {
    transition: all ease 0.2s;
  }

  &:hover .expand-label {
    color: var(--primary);
  }
`;
