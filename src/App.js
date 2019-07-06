import React from "react";
import "./App.css";
import StyledHeader from "./components/StyledHeader";
import { PropsButton, BigButton } from "./components/PropsButton";
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
      <StyledHeader title="hello from app.js" />
      <PropsButton color="blue">button number one</PropsButton>
      <PropsButton color="red">button number two</PropsButton>
      <PropsButton>button number three</PropsButton>
      <BigButton>button number three</BigButton>
    </div>
  );
}

export default App;
