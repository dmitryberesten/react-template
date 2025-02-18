import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @keyframes colorChange {
    0% { color: blueviolet; }
    25% { color: blue; }
    50% { color: green; }
    75% { color: orange; }
    100% { color: red; }
  }

  .title {
    font-size: 36px;
    font-family: Verdana, Tahoma, sans-serif;
    animation: colorChange 3s infinite alternate;
  }

  @keyframes borderAnimation {
    0% { border-color: #a8d5ba; } 
    50% { border-color: #006400; } 
    100% { border-color: #a8d5ba; } 
  }
`;

export default GlobalStyle;
