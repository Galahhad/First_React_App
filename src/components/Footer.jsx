import React from 'react';
import styles from "./Footer.module.css";
import img from "../assets/Group 6.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrap}>
      <div className={styles.img_wrap}>
        <img src={img} alt="Intocode" />
      </div>
      <ul className={styles.list}>
        <li>Партнерам</li>
        <li>Разработчикам</li>
        <li>Вакансии</li>
      </ul>
      </div>
      <div className={styles.intocode_text}>
        ООО “интукод”, 2020г.
      </div>
    </div>
  );
}

export default Footer;