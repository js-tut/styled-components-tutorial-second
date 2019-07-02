import React from "react";
import "./App.css";
// inline css
// app css
// css variables
// file css
function App() {
  return (
    <div>
      <h1>styled components</h1>
      <h2 style={{ color: "red", textTransform: "uppercase" }}>
        inline styles
      </h2>
      <h2 className="global">global css</h2>
      <h2 className="first">first</h2>
      <h2 className="second">second</h2>
    </div>
  );
}

export default App;
