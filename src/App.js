import React from "react";
import "./App.css";
import Alternative from "./components/AlternativeHeader";
import { DangerButton, SuccessButton } from "./components/PropsButton";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <Alternative title="hello from app.js" />
      <DangerButton big>danger button</DangerButton>
      <SuccessButton>success button</SuccessButton>
    </div>
  );
}

export default App;
