import React from "react";
import T from "prop-types";
import Icon from "base/Icon";
import { logoClientLink } from "config";
import styles from "./LogoClient.module.css";

const LogoClient = ({ onClick }) => (
  <a
    href={logoClientLink}
    target="_blank"
    rel="noreferrer"
    className={styles.logo}
    onClick={onClick}
  >
    <Icon type="logoWinline" />
  </a>
);

LogoClient.propTypes = {
  onClick: T.func.isRequired,
};

export default LogoClient;
