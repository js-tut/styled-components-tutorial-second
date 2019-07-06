import React from "react";
import "./App.css";
import StyledHeader from "./components/StyledHeader";
import PropsButton from "./components/PropsButton";
function App() {
  return (
    <div>
      <StyledHeader title="hello from app.js" />
      <PropsButton color="blue">button number one</PropsButton>
      <PropsButton color="red">button number two</PropsButton>
      <PropsButton>button number three</PropsButton>
    </div>
  );
}

export default App;
