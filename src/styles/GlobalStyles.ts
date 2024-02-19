import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
*,
*::before,
*::after {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}
body {
  min-width: 360px;
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

li {
  //border: 2px solid #e6d7d9; 
  list-style: none;
  margin: 0;
  padding: 0
}

button {
  border: none;
}
`;

export default GlobalStyle;
