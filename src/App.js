import React from "react";
import Header from "./Components/Header";
import Maincontent from "./Components/Maincontent";
import Footer from "./Components/Footer";
import styles from "./main.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
