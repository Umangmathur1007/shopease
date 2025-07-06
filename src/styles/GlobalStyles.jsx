import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f9f9f9;
  }
  input, button {
    padding: 8px;
    margin: 8px 0;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  button {
    background: #222;
    color: #fff;
    cursor: pointer;
  }
`;

export default GlobalStyles;
