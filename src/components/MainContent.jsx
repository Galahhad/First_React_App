import React, { useState } from "react";
import styles from "./MainContent.module.css";

const MainContent = () => {

  const [number, numberCount] = useState(0);

  const numberPlus = () => {
    numberCount(number + 1);
  }
  const numberMinus = () => {
    if (number === 0) {
      numberCount(number);
    } else {
    numberCount(number - 1);
    }
  }
  const numberReset = () => {
    numberCount(0);
  }

  return (
    <div className={styles.main_content}>
      <div className={styles.number}>
        {number}
      </div>
      <div className={styles.list}>
        <button className={styles.zoom} onClick={numberPlus}>Увеличить</button>
        <button className={styles.reduce} onClick={numberMinus}>Уменьшить</button>
        <button className={styles.reset} onClick={numberReset}>Сбросить</button>
      </div>
    </div>
  );
}

export default MainContent;