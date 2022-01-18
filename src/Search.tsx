import React, { useState, useRef } from "react";
import "./styles/Search.css";

interface SearchProps {
  unavailable: boolean;
  setFetchUser: (str: string) => void;
  setUnavailable: (bool: boolean) => void;
}

export default function Search({
  setUnavailable,
  setFetchUser,
  unavailable,
}: SearchProps) {
  const [user, setUser] = useState<string>();
  const button = useRef<HTMLButtonElement>(null);
  const search = "./icon-search.svg";

  const handleChange = (str: string) => {
    setUnavailable(false);
    setUser(str);
    button.current?.classList.remove("undefinedButton");
  };
  const handleClick = () => {
    if (user === undefined) {
      return;
    }
    setFetchUser(user);
  };

  if (unavailable) {
    button.current?.classList.add("undefinedButton");
  }

  return (
    <div className="input">
      <input
        placeholder="Search Github username..."
        value={user}
        onChange={(e) => handleChange(e.target.value)}
      />
      <img className="input__search-icon" alt="search icon" src={search} />
      <div className="input__search-block">
        <h4
          style={{ display: unavailable ? "block" : "none" }}
          className="input__search-error"
        >
          No Results
        </h4>
        <button
          ref={button}
          className="input__button"
          onClick={() => handleClick()}
        >
          Search
        </button>
      </div>
    </div>
  );
}
