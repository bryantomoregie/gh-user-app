import React, { useRef } from "react";
import "./styles/Main.css";

interface UserDetailsProps {
  image: string;
  data: string | undefined;
}

export default function UserDetails({ image, data }: UserDetailsProps) {
  const text = useRef<HTMLHeadingElement>(null);
  let userData = data;

  if (text.current && userData === undefined) {
    userData = "Not Available";
    text.current.classList.add("undefinedData");
  }

  return (
    <div className="userDetails__child">
      <div className="icon">
        <img src={image} alt="" />
      </div>
      <h4 ref={text} className="userDetails__child__text">
        {userData}
      </h4>
    </div>
  );
}
