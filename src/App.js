import React from "react";
import "./App.css";
import styled from "styled-components";
// const name = 'john'
// const greeting = `hello my name is ${name}`
// styled-components utilises tagged template literals to style your components
// function`` - tagged template literal
const Button = styled.button`
  color: red;
  background: blue;
  text-transform: uppercase;
`;
const SecondButton = styled.button`
  color: blue;
  background: red;
  text-transform: uppercase;
`;

function App() {
  return (
    <div>
      hello from app
      <Button>click me</Button>
      <SecondButton>click me i'm second</SecondButton>
    </div>
  );
}

export default App;
