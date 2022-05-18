import React from "react";
import Hello from "./Hello";
import "./App.css";
import Wrapper from "./Wrapper";

function App() {
  const name = "react";

  const style = {
    background: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <div>
      <div style={style}>{name} is good yeah~!</div>
      <Wrapper>
        <Hello name="reacT" color="red" />
        <Hello color="pink" />
      </Wrapper>
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
