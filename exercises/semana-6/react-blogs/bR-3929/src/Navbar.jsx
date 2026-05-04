import React from "react";

const NavBar = ({ title, referencia }) => {
  return (
    <div className="post">
      <ul>
        <li>
          <a href={referencia}>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
