import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  body {
     font-family: 'Poppins', sans-serif;
     background:var(--color-ligth-primary);
     color:var(--color-blue-primary);
  }
  html {
    scroll-behavior: smooth;
}
  :root {
    --color-blue-primary:#102c44;
    --color-dark-primary:#1e272e;
    --color-dark-secondary:#252a30;
    --color-light-primary:#fcffff;
    --color-light-secondary:#b1b6bc;
  }

  .flex-container {
    max-width:80%;
    margin: 0 auto;

    @media (min-width:240px) and (max-width:880px) {
      max-width:90%;
    }
  }
`;

export default GlobalStyle;
