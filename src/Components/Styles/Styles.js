import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
`;
export const Box = styled.div`
  border: solid 1px black;
  height: 150px;
  width: 80%;
  margin: 20px;
  background: ${(props) =>
    props.column === "column-2" 
    ? "white"
    :
    props.correct
      ? "linear-gradient(-45deg, #65f4cd, #4799e9)"
      : "linear-gradient(-45deg, #f94144, #f8961e)"};
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 4s infinite;
`;

export const CodeSnip = styled.div `
    border: solid 2px pink;
    height: 50px;
    width: 100%;
    background-color: ${props => props.col};
    margin: 10px;
`
export const Container = styled.div `
    display: flex;
`
export const ContentStyles = styled.div `
    border: solid blue 2px;
    color: grey;
    height: 100%;
`
export const ColumnContainer = styled.div `
    margin: 8px;
    border: 1px solid black;
    width: 220px;
    display: flex;
    flex-direction: column;
`
export const ColumnTitle = styled.h1 `
    padding: 8px;
    color: red;
`
export const BoxListStyle = styled.div`
    border: black 2px solid;
    min-height: 100%;
    background-color: azure;

`