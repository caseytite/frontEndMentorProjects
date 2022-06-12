import { createGlobalStyle } from "styled-components";

interface SStyles {
  darkMode: boolean;
  body: string;
}

const GlobalStyles = createGlobalStyle<SStyles>`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ body, darkMode }) => (darkMode ? "black" : body)};
    color: ${({ darkMode }) => (darkMode ? "white" : "hsl(192, 100%, 9%)")};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}`;

export default GlobalStyles;
