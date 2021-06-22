import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }

  :root {
    --white: #FFF;
    --magenta: #FF377F;
    --gray-100: #FAF5FF;
    --navy-100: #989FDB;
    --navy-500: #383E71;
    --purple-600: #9D25B0;
    --purple-650: #9626AC;
    --purple-900: #130525;
  }

  .swal2-title {
    color: var(--navy-500) !important;
  }

  .swal2-html-container {
    color: var(--navy-100) !important;
  }

  .swal2-styled.swal2-confirm {
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%) !important;
    font-weight: 600;
  }
`