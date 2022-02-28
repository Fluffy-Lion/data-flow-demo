import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
`;
export const Box = styled.div`
  border: solid 1px black;
  height: 150px;
  width: 400px;
  margin: 20px;
  background: ${(props) =>
    props.prop
      ? "linear-gradient(-45deg, #65f4cd, #4799e9)"
      : "linear-gradient(-45deg, #f94144, #f8961e)"};
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 4s infinite;
`;

export const CodeSnip = styled.div `
    border: solid 2px pink;
    height: 50px;
    width: 300px;
    background-color: ${props => props.col};
    margin: 10px;
`

export const Cont = styled.div `
    border: solid blue 2px;
    display: flex;
    justify-content: center;
    background-color: 
`
