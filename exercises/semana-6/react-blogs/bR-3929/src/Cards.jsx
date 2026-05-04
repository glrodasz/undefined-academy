import React from "react";
import {humanize} from "./index.mjs"

const Card = ({ link, image, description, className, date }) => {
  return (
    <>
    <div className="post">
      <a href={link} id={className}>
        <img src={image}></img>
      </a>
      <p>{description}</p>
      <span>{humanize(date)}</span>
    </div>
    
    </>);
};

export default Card;
