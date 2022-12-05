import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
 html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  background:url("${background}");
  background-position: center center;
  font-family: 'Montserrat', sans-serif;
}
`;
