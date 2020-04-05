import React, { Component } from "react";
import styles from "./Loading.module.css";

class Loading extends Component {
  state = {};
  render() {
    return (
      <div id="loading-container" className={styles.loadingContainer}>
        <div className={styles.loading}>
          <div className={styles.obj} />
          <div className={styles.obj} />
          <div className={styles.obj} />
          <div className={styles.obj} />
          <div className={styles.obj} />
          <div className={styles.obj} />
          <div className={styles.obj} />
          <div className={styles.obj} />
        </div>
      </div>
    );
  }
}

export default Loading;
