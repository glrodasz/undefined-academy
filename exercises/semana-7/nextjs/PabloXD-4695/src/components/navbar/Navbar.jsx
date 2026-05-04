"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Pablo Rodriguez
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
  
      </div>
    </div>
  );
};

export default Navbar;
