import React from "react";
import logo from "../assets/Group 1.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.img_wrap}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.list}>
        <li><a href="/">Главная</a></li>
        <li><a href="/">О нас</a></li>
        <li><a href="/">Контакты</a></li>
      </ul>
    </header>
  );
}

export default Header;