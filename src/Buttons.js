import styled from "styled-components";

const color = "yellow";

export const Button = styled.button`
  color: red;
  background: blue;
  text-transform: uppercase;
`;
export const SecondButton = styled.button`
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
`;
