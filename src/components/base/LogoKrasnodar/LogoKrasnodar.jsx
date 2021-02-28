import React from "react";
import T from "prop-types";
import cx from "classnames";
import styles from "./LogoKrasnodar.module.css";

const LogoKrasnodar = ({ className }) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.icon} />
    <div className={styles.text}>Игроки «Краснодара»</div>
  </div>
);

LogoKrasnodar.propTypes = {
  className: T.string,
};

export default LogoKrasnodar;
