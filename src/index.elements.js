import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  body {
     font-family: 'Raleway', sans-serif;
     background:var(--color-dark-primary);
  }
  html {
    scroll-behavior: smooth;
}
  :root {
    --color-dark-primary:#1f2326;
    --color-dark-secondary:#252a30;
    --color-light-primary:#fcffff;
    --color-light-secondary:#b1b6bc;
    --color-green-primary:#21b595;
  }

  .flex-container {
    max-width:80%;
    margin: 0 auto;

    @media (min-width:240px) and (max-width:880px) {
      max-width:90%;
    }
  }
`;

export { GlobalStyle };
