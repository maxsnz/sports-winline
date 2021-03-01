import React from "react";
import T from "prop-types";
import Icon from "base/Icon";
import { logoSportsLink } from "config";
import styles from "./LogoSports.module.css";

const LogoSports = ({ onClick }) => (
  <a
    href={logoSportsLink}
    target="_blank"
    rel="noreferrer"
    className={styles.logo}
    onClick={onClick}
  >
    <Icon type="logoSports" />
  </a>
);

LogoSports.propTypes = {
  onClick: T.func.isRequired,
};

export default LogoSports;
