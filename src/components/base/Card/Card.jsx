import React from "react";
import T from "prop-types";
import cx from "classnames";
import Icon from "base/Icon";
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
    <div className={styles.answered}>
      <div className={styles.answeredIcon}>
        {isAnsweredCorrect && <Icon type="correct" team={team} />}
        {isAnsweredWrong && <Icon type="wrong" team={team} />}
      </div>
      <div
        className={cx(styles.answeredName, {
          [styles.red]: team === "spartak",
          [styles.green]: team === "krasnodar",
        })}
      >
        {name}
      </div>
    </div>
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
