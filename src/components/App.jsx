import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import styles from "./App.module.css";
import Footer from "./Footer";

const App = () => {
  return (
    <div className={styles.supreme}>
    <Header />
    <MainContent />
    <Footer />
    </div>
  );
}

export default App;