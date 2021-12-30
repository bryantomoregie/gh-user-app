import React from "react";
import "./styles/Search.css";

export default function Search() {
  const search = "./icon-search.svg";
  return (
    <div className="input">
      <input placeholder="    Search Github username..." />
      <img className="input__search-icon" alt="search icon" src={search} />
      <button className="input__button">Search</button>
    </div>
  );
}
