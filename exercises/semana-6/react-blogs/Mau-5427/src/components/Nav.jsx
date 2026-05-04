import React from "react";
import NavBtn from "./NavBtn";

const navLinks = [
  {
    image: "MBsReSZ2WNM",
    btnText: "Decor"
  },
  {
    image: "QLqNalPe0RA",
    btnText: "Lifestyle"
  },
  {
    image: "LgTyii0GDKQ",
    btnText: "Food"
  },
  {
    image: "tQpypKA92k8",
    btnText: "Travel"
  },
  {
    image: "OtXADkUh3-I",
    btnText: "Interior"
  },
  {
    image: "lAx4E6Gl06s",
    btnText: "Design"
  }
];

export default function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        {navLinks.map(({ image, btnText }, i) => {
          return <NavBtn key={i} imageId={image} btnText={btnText}></NavBtn>;
        })}
      </ul>
    </nav>
  );
}
