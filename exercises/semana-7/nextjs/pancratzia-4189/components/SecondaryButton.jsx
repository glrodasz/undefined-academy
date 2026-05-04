import React from "react";

export default function SecondaryButton({children, href}) {
  return (
    <a 
    href={href} 
    className="btn btn-outline-light btn-lg px-4"
    target="_blank">
      {children}
    </a>
  );
}
