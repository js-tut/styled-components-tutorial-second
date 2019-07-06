import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import img1 from "./images/image-1.jpeg";
import img2 from "./images/image-2.jpeg";
function App() {
  return (
    <div>
      <Hero img={img1} />
      <Hero img={img2} />
      <Hero big />
    </div>
  );
}

export default App;
