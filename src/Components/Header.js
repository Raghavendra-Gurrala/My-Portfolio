import React from "react";
import styles from "./styles.module.css";
import { Typography, Image } from "antd";
import LOGO from "../my-images/LOGO.png";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          preview={false}
          width={170}
          height={100}
          src={LOGO}
          className={styles.logoimage}
        />
        <div className={styles.headermenu}>
          <Typography className={styles.menutext}>Home</Typography>
          <Typography className={styles.menutext}>My Story</Typography>
          {/* <Typography className={styles.menutext}>My projects</Typography> */}
          <Typography className={styles.menutext}>My skills</Typography>
          <Typography className={styles.menutext}>Contact</Typography>
        </div>
      </div>
    </div>
  );
}

export default Header;
