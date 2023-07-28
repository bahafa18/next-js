import React from "react";
import styles from "./page.module.css";

const PortoLayout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our works</h1>
      {children}
    </div>
  );
};

export default PortoLayout;
