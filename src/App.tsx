import { useState, useEffect } from "react";
import Search from "./Search";
import Main from "./Main";
import { useTheme } from "./provider";
import "./styles/App.css";

function App() {
  const [fetchUser, setFetchUser] = useState("Octocat");
  const [userObject, setUserObject] = useState("");
  const { mode, setMode } = useTheme();

  useEffect(() => {
    fetch(`https://api.github.com/users/${fetchUser}`)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setUserObject(data);
        }
      })
      .catch(() => null);
  }, [fetchUser]);

  const moon = "/icon-moon.svg";
  const sun = "/icon-sun.svg";

  const handleClick = () => {
    if (mode === "light-mode") {
      setMode("dark-mode");
      localStorage.setItem("mode", "dark-mode");
    } else {
      setMode("light-mode");
      localStorage.setItem("mode", "light-mode");
    }
  };
  return (
    <div className={`app ${mode}`}>
      <div className="header">
        <h1>devfinder</h1>
        <div className="header__theme" onClick={() => handleClick()}>
          <h4>{mode === "dark-mode" ? "LIGHT" : "DARK"}</h4>
          <img alt="moon" src={mode === "dark-mode" ? sun : moon}></img>
        </div>
      </div>
      <Search setFetchUser={setFetchUser}></Search>
      <Main userObject={userObject}></Main>
    </div>
  );
}

export default App;
