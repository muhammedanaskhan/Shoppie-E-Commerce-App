import React from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, onClose }) => {
  return (
    <div className={styles.toast}>
      <div className={styles["toast-content"]}>{message}</div>
      <button className={styles["toast-close"]} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Toast;
