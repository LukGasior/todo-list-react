import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: rgb(226, 226, 226);
  word-break: break-word;
}
`;