import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-family: ${({ theme }) => theme.fontFamily}
  }
`;

export default GlobalStyle;
