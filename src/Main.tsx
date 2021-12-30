import React, { useState, useEffect } from "react";
import { updateLanguageServiceSourceFile } from "typescript";
import "./styles/Main.css";
import { getMonth } from "./utils";

export default function Main() {
  interface UserObject {
    [key: string]: any;
  }

  const [user, setUser] = useState<UserObject | undefined>();

  useEffect(() => {
    fetch("https://api.github.com/users/bryantomoregie")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);

  const date = new Date(user?.created_at);
  const day = date.getDay();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();

  const location = "./icon-location.svg";
  const website = "./icon-website.svg";
  const twitter = "./icon-twitter.svg";
  const company = "./icon-location.svg";

  return (
    <main>
      <div className="container">
        <div className="section1">
          <img className="section1__img" src={user?.avatar_url} alt="" />
          <div>
            <h1 className="section1__name">{user?.name}</h1>
            <h3 className="section1__username">{`@${user?.login}`}</h3>
            <h4 className="section1__date">{`Joined ${day} ${month} ${year}`}</h4>
          </div>
        </div>
        <h4 className="section2">{user?.bio}</h4>
        <section className="section3">
          <div className="section3__child">
            <h4 className="section3__child__title">Repos</h4>
            <h1 className="section3__child__num">{user?.public_repos}</h1>
          </div>
          <div className="section3__child">
            <h4 className="section3__child__title">Followers</h4>
            <h1 className="section3__child__num">{user?.followers}</h1>
          </div>
          <div className="section3__child">
            <h4 className="section3__child__title">Following</h4>
            <h1 className="section3__child__num">{user?.following}</h1>
          </div>
        </section>
        <div className="section4">
          <div className="section4__child">
            <div className="icon">
              <img src={location} alt="" />
            </div>
            <h4 className="section4__child__text">
              {user?.location ? user?.location : "Not Available"}
            </h4>
          </div>
          <div className="section4__child">
            <div className="icon">
              <img src={website} alt="" />
            </div>
            <h4 className="section4__child__text">
              {user?.blog ? user?.blog : "Not Available"}
            </h4>
          </div>
          <div className="section4__child">
            <div className="icon">
              <img src={twitter} alt="" />
            </div>
            <h4 className="section4__child__text">
              {user?.twitter_username
                ? user?.twitter_username
                : "Not Available"}
            </h4>
          </div>
          <div className="section4__child">
            <div className="icon">
              <img src={company} alt="" />
            </div>
            <h4 className="section4__child__text">
              {user?.company ? user?.company : "Not Available"}
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
