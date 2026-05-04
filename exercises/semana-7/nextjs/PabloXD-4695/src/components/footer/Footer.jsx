import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Pablo Rodriguez.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/pabloArmp2019/" target="_blank">
          <Image
            src="/1.png"
            width={30}
            height={30}
            className={styles.icon}
            alt="Pablo Rodriguez Facebook Account"
          />
        </Link>
        <Link href="https://github.com/pablo-alex" target="_blank">
          <Image
            src="/2.png"
            width={30}
            height={30}
            className={styles.icon}
            alt="Pablo Rodriguez Github Account"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/pablo-armp/" target="_blank">
          <Image
            src="/3.png"
            width={30}
            height={30}
            className={styles.icon}
            alt="Pablo Rodriguez Linkedln Page"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
