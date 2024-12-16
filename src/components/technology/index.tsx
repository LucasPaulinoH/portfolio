import "./styles.css";
import { TecIcon } from "../../types/technologyIcons";
import styled from "styled-components";
import {
  BRIGHTER_GRADIENT_COLOR,
  DARKER_GRADIENT_COLOR,
  PRIMARY_COLOR,
  WHITE,
} from "../../theme/palette";
import { CSSProperties, useState } from "react";

interface TechnologyProps {
  tecInfo: TecIcon;
}

const Technology = (props: TechnologyProps) => {
  const { tecInfo } = props;
  const ICON_SIZE = 50;

  const [iconFill, setIconFill] = useState(WHITE);

  return (
    <Container
      href={tecInfo.link}
      className="container"
      style={{ "--hover-color": PRIMARY_COLOR } as CSSProperties}
      onMouseEnter={() => setIconFill("url(#linear-gradient)")}
      onMouseLeave={() => setIconFill(WHITE)}
    >
      <svg width={0} height={0}>
        <linearGradient
          id="linear-gradient"
          x1={1}
          y1={0}
          x2={1}
          y2={1}
          gradientTransform="rotate(-50)"
        >
          <stop offset="0%" stopColor={BRIGHTER_GRADIENT_COLOR} />
          <stop offset="50%" stopColor={PRIMARY_COLOR} />
          <stop offset="100%" stopColor={DARKER_GRADIENT_COLOR} />
        </linearGradient>
      </svg>
      <tecInfo.icon
        size={ICON_SIZE}
        className="icon"
        style={{ fill: iconFill }}
      />
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
