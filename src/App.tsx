import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

import styles from "./App.module.scss";

function App() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Welcome to the app</h2>
        <p className={styles.text__primary}>Primary texts</p>
        <p className={styles.text__secondary}>Secondary texts</p>
      </div>
      <button className={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
