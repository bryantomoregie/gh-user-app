import React from "react";
import Search from "./Search";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <h1>devfinder</h1>
      <p>Dark</p>
      <img alt="moon" src="/icon-moon.svg"></img>
      <Search></Search>
    </div>
  );
}

export default App;
