import React from "react";
import "./styles/Main.css";
import { getMonth } from "./utils";

interface UserObject {
  [key: string]: any;
}

export default function Main({ userObject }: UserObject) {
  const date = new Date(userObject?.created_at);
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
          <img className="section1__img" src={userObject?.avatar_url} alt="" />
          <div>
            <h1 className="section1__name">{userObject?.name}</h1>
            <h3 className="section1__username">{`@${userObject?.login}`}</h3>
            <h4 className="section1__date">{`Joined ${day} ${month} ${year}`}</h4>
          </div>
        </div>
        <h4 className="section2">{userObject?.bio}</h4>
        <section className="section3">
          <div className="section3__child">
            <h4 className="section3__child__title">Repos</h4>
            <h1 className="section3__child__num">{userObject?.public_repos}</h1>
          </div>
          <div className="section3__child">
            <h4 className="section3__child__title">Followers</h4>
            <h1 className="section3__child__num">{userObject?.followers}</h1>
          </div>
          <div className="section3__child">
            <h4 className="section3__child__title">Following</h4>
            <h1 className="section3__child__num">{userObject?.following}</h1>
          </div>
        </section>
        <div className="section4">
          <div className="section4__child">
            <div className="icon">
              <img src={location} alt="" />
            </div>
            <h4 className="section4__child__text">
              {userObject?.location ? userObject?.location : "Not Available"}
            </h4>
          </div>
          <div className="section4__child">
            <div className="icon">
              <img src={website} alt="" />
            </div>
            <h4 className="section4__child__text website">
              {userObject?.blog ? userObject?.blog : "Not Available"}
            </h4>
          </div>
          <div className="section4__child">
            <div className="icon">
              <img src={twitter} alt="" />
            </div>
            <h4 className="section4__child__text">
              {userObject?.twitter_username
                ? userObject?.twitter_username
                : "Not Available"}
            </h4>
          </div>
          <div className="section4__child">
            <div className="icon">
              <img src={company} alt="" />
            </div>
            <h4 className="section4__child__text">
              {userObject?.company ? userObject?.company : "Not Available"}
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
