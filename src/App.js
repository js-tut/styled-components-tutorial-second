import React from "react";
import "./App.css";
import { Button } from "./Buttons";
import { SecondButton } from "./Buttons";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      hello from app
      <Button>click me</Button>
      <SecondButton>click me i'm second</SecondButton>
    </div>
  );
}

export default App;
