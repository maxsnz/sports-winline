import React from "react";
import T from "prop-types";
import Icon from "base/Icon";
import styles from "./LogoClient.module.css";

const LogoClient = ({ onClick }) => (
  <a href="/" target="_blank" className={styles.logo} onClick={onClick}>
    <Icon type="logoWinline" />
  </a>
);

LogoClient.propTypes = {
  onClick: T.func.isRequired,
};

export default LogoClient;
