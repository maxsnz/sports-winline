import React from "react";
import T from "prop-types";
import cx from "classnames";
import styles from "./Card.module.css";
import "./players.css";

const Card = ({
  onClick,
  name,
  isAnsweredCorrect,
  isAnsweredWrong,
  team,
  id,
}) => (
  <div
    className={cx(
      styles.card,
      {
        [styles.correct]: isAnsweredCorrect,
        [styles.wrong]: isAnsweredWrong,
      },
      `${team}-${id}`
    )}
    onClick={onClick}
  >
    <div className={styles.name}>{name}</div>
  </div>
);

Card.propTypes = {
  name: T.string.isRequired,
  onClick: T.func.isRequired,
  isAnsweredCorrect: T.bool,
  isAnsweredWrong: T.bool,
  team: T.oneOf(["spartak", "krasnodar"]).isRequired,
  id: T.string.isRequired,
};

export default Card;
