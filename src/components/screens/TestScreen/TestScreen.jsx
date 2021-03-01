import React, { useEffect, useState } from "react";
import T from "prop-types";
import cx from "classnames";
import Bg from "base/Bg";
import Icon from "base/Icon";
import LogoClient from "base/LogoClient";
import LogoSpartak from "base/LogoSpartak";
import LogoKrasnodar from "base/LogoKrasnodar";
import Timer from "base/Timer";
import Card from "base/Card";
import { shuffle, trackEvent } from "utils";
import styles from "./TestScreen.module.css";

const allPlayers = {
  spartak: {
    1: "Илья Кутепов",
    2: "Артем Ребров",
    3: "Йордан Ларссон",
    4: "Роман Зобнин",
    5: "Алекс Крал",
    6: "Георгий Джикия",
    7: "Александр Соболев",
    promo: "Винлайн",
  },
  krasnodar: {
    1: "Магомед-Шапи Сулейманов",
    2: "Матвей Сафонов",
    3: "Маркус Берг",
    4: "Вандерсон",
    5: "Алексей Ионов",
    6: "Ари",
    7: "Александр Мартынович",
    promo: "Винлайн",
  },
};

const TestScreen = ({ team, onRestart, onFinish, onLogoClientClick }) => {
  const [state, setState] = useState(() => ({
    questions: [],
    answers: [],
    currentIndex: 0,
    correctAnswers: 0,
    isBlocked: false,
    answered: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      promo: false,
    },
  }));

  useEffect(() => {
    const questions = shuffle(Object.keys(allPlayers[team]));
    const answers = shuffle(Object.keys(allPlayers[team]));
    setState({ ...state, questions, answers });
  }, []);

  const {
    questions,
    answers,
    currentIndex,
    correctAnswers,
    isBlocked,
    answered,
  } = state;
  const players = allPlayers[team];

  const onAnswer = (id) => {
    if (id === "promo") {
      trackEvent("Winline_card_click");
    } else {
      trackEvent("User_Card_Click");
    }

    setState({ ...state, isBlocked: true });

    const newIndex = currentIndex + 1;
    const correctId = questions[currentIndex];
    const isAnswerCorrect = correctId === id;
    const newCorrectAnswers = isAnswerCorrect
      ? correctAnswers + 1
      : correctAnswers;
    setState({
      ...state,
      correctAnswers: newCorrectAnswers,
      currentIndex: newIndex,
      isBlocked: false,
      answered: {
        ...state.answered,
        [correctId]: isAnswerCorrect ? "correct" : "wrong",
      },
    });

    if (newIndex >= questions.length) {
      onFinish(newCorrectAnswers);
    }
  };

  const onTimerEnd = () => {
    onFinish(correctAnswers);
  };

  return (
    <div className={styles.container}>
      <Bg opacity={0.88} />
      <div
        className={cx(styles.header, {
          [styles.headerSpartak]: team === "spartak",
          [styles.headerKrasnodar]: team === "krasnodar",
        })}
      >
        {team === "spartak" && <LogoSpartak className={styles.logoTeam} />}
        {team === "krasnodar" && <LogoKrasnodar className={styles.logoTeam} />}
        <LogoClient onClick={onLogoClientClick} />
        <div className={styles.headerContent}>
          <div className={styles.headerContentLeft}>
            <div className={styles.headerPlayer}>
              {players[questions[currentIndex]]}
            </div>
          </div>
          <div className={styles.headerContentRight}>
            <div className={styles.headerTime}>
              <Timer timerLength={90 * 1000} onEnd={onTimerEnd} />
            </div>
            <div className={styles.headerRestart} onClick={() => onRestart()}>
              <Icon type="restart" />
              <span className={styles.restartText}>Переиграть</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        {answers.map((id) => (
          <Card
            key={id}
            onClick={() => onAnswer(id)}
            name={players[id]}
            isCorrect={questions[currentIndex] === id}
            isBlocked={isBlocked}
            team={team}
            id={id}
            isAnsweredCorrect={answered[id] === "correct"}
            isAnsweredWrong={answered[id] === "wrong"}
          />
        ))}
      </div>
    </div>
  );
};

TestScreen.propTypes = {
  team: T.oneOf(["spartak", "krasnodar"]).isRequired,
  onRestart: T.func.isRequired,
  onFinish: T.func.isRequired,
  onLogoClientClick: T.func.isRequired,
};

export default TestScreen;
