import React from "react";

export default function NavBtn({ imageId, btnText }) {
  return (
    <li>
      <a className="nav-btn nav-link-sm font-medium" href="#">
        <img src={`https://source.unsplash.com/${imageId}`} alt="" />
        <span>{btnText}</span>
      </a>
    </li>
  )
}