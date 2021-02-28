import React from "react";
import T from "prop-types";
import cx from "classnames";
import styles from "./LogoSpartak.module.css";

const LogoSpartak = ({ className }) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.icon} />
    <div className={styles.text}>Игроки «Спартака»</div>
  </div>
);

LogoSpartak.propTypes = {
  className: T.string,
};

export default LogoSpartak;
