import React, { useState, useRef, useEffect } from "react";
import T from "prop-types";
import cx from "classnames";
import { trackEvent } from "utils";
import styles from "./Card.module.css";
import "./players.css";

const Card = ({ onClick, name, isCorrect, isBlocked, team, id }) => {
  const timerRef = useRef();
  const [answered, setAnswered] = useState(null);

  const onClickHandler = () => {
    if (isBlocked) return;

    if (id === "promo") {
      trackEvent("Winline_card_click");
    } else {
      trackEvent("User_Card_Click");
    }

    if (isCorrect) {
      setAnswered("correct");
    } else {
      setAnswered("wrong");
    }

    onClick();
    timerRef.current = setTimeout(() => {
      setAnswered(null);
    }, 1000);
  };

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  return (
    <div
      className={cx(
        styles.card,
        {
          [styles.correct]: answered === "correct",
          [styles.wrong]: answered === "wrong",
        },
        `${team}-${id}`
      )}
      onClick={onClickHandler}
    >
      <div className={styles.name}>{name}</div>
    </div>
  );
};

Card.propTypes = {
  name: T.string.isRequired,
  onClick: T.func.isRequired,
  isCorrect: T.bool.isRequired,
  isBlocked: T.bool.isRequired,
  team: T.oneOf(["spartak", "krasnodar"]).isRequired,
  id: T.string.isRequired,
};

export default Card;
