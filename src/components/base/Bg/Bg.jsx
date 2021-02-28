import React from "react";
import T from "prop-types";
import styles from "./Bg.module.css";

const Bg = ({ opacity = 1 }) => (
  <div className={styles.container} style={{ opacity }}></div>
);

Bg.propTypes = {
  opacity: T.number,
};

export default Bg;
