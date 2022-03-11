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
     color:var(--color-dark-primary);
  }
  html {
    scroll-behavior: smooth;
}

h1, h2 {
  font-size:2rem;
  font-weight:700;
  margin-bottom:2rem;
}
  :root {
    --color-blue-primary:#102c44;
    --color-blue-secondary:#2e86de;
    --color-dark-primary:#1e272e;
    --color-dark-secondary:#252a30;
    --color-light-primary:#fcffff;
    --color-light-secondary:#f5f6fa;
  }

  .flex-container {
    max-width:70%;
    margin: 0 auto;

    @media (min-width:240px) and (max-width:880px) {
      max-width:90%;
    }
  }
`;

export default GlobalStyle;
