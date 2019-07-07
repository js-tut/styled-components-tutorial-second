import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import img1 from "./images/image-1.jpeg";
import img2 from "./images/image-2.jpeg";
import Banner from "./components/Banner";
import { DangerButton } from "./examples/PropsButton";
function App() {
  return (
    <div>
      <Hero img={img1}>
        <Banner title="this is my title" color="red">
          <DangerButton big>click me</DangerButton>
        </Banner>
      </Hero>
      <Hero img={img2} />
      <Hero big />
    </div>
  );
}

export default App;
