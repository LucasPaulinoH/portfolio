import "./styles.css";
import { TecIcon } from "../../types/technologyIcons";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../theme/palette";
import { CSSProperties } from "react";

interface TechnologyProps {
  tecInfo: TecIcon;
}

const Technology = (props: TechnologyProps) => {
  const { tecInfo } = props;
  const ICON_SIZE = 80;

  return (
    <Container
      href={tecInfo.link}
      className="container"
      style={{ "--hover-color": PRIMARY_COLOR } as CSSProperties}
    >
      <tecInfo.icon size={ICON_SIZE} className="icon" />
      <p className="label">{tecInfo.name}</p>
    </Container>
  );
};

export default Technology;

const Container = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 25px;
`;
