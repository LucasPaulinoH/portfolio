import { createGlobalStyle } from "styled-components";
import {
  BRIGHTER_GRADIENT_COLOR,
  DARKER_GRADIENT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERCIARY_COLOR,
  WHITE,
} from "./palette";

const GlobalStyles = createGlobalStyle`
  :root {
    --gradient-start: ${BRIGHTER_GRADIENT_COLOR};
    --primary: ${PRIMARY_COLOR};
    --gradient-end: ${DARKER_GRADIENT_COLOR};
    --terciary: ${TERCIARY_COLOR};
    --secondary: ${SECONDARY_COLOR};
    --white: ${WHITE};
    --shadow: rgba(255, 101, 0, 0.5);
    --shadow-hover: rgba(255, 101, 0, 0.7);
    --background-dark: #040421;
  }
`;

export default GlobalStyles;
