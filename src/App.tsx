import { useState } from "react";
import Search from "./Search";
import Main from "./Main";
import "./styles/App.css";

function App() {
  const [theme, setTheme] = useState("DARK");
  const moon = "/icon-moon.svg";
  const sun = "/icon-sun.svg";

  const handleClick = () => {
    if (theme === "LIGHT") {
      setTheme("DARK");
    } else {
      setTheme("LIGHT");
    }
  };
  return (
    <div className="app">
      <div className="header">
        <h1>devfinder</h1>
        <div className="header__theme" onClick={() => handleClick()}>
          <h4>{theme}</h4>
          <img alt="moon" src={theme === "DARK" ? moon : sun}></img>
        </div>
      </div>
      <Search></Search>
      <Main></Main>
    </div>
  );
}

export default App;
