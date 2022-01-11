import React, { useState } from "react";
import "./styles/Search.css";

interface SearchProps {
  setFetchUser: (str: string) => void;
}

export default function Search({ setFetchUser }: SearchProps) {
  const [user, setUser] = useState<string>();
  const search = "./icon-search.svg";

  const handleChange = (str: string) => {
    setUser(str);
  };
  const handleClick = () => {
    if (user === undefined) {
      return;
    }
    setFetchUser(user);
  };

  return (
    <div className="input">
      <input
        placeholder="Search Github username..."
        value={user}
        onChange={(e) => handleChange(e.target.value)}
      />
      <img className="input__search-icon" alt="search icon" src={search} />
      <div className="input__search-block">
        <h4 className="input__search-error">No Results</h4>
        <button className="input__button" onClick={() => handleClick()}>
          Search
        </button>
      </div>
    </div>
  );
}
