import React from "react";
import T from "prop-types";
import Bg from "base/Bg";
import LogoSports from "base/LogoSports";
import LogoClient from "base/LogoClient";
import styles from "./StartScreen.module.css";

const StartScreen = ({ onStart, onLogoSportsClick, onLogoClientClick }) => (
  <div className={styles.container}>
    <Bg />
    <div className={styles.gradientLeft} />
    <div className={styles.gradientRight} />
    <LogoSports onClick={onLogoSportsClick} />
    <LogoClient onClick={onLogoClientClick} />
    <div className={styles.content}>
      <div className={styles.title}>
        Знаете игроков «Спартака» и «Краснодара»? Уверены?
      </div>
      <div className={styles.flags} />
      <div className={styles.chooseClub}>Выберите клуб</div>
      <div className={styles.clubs}>
        <div className={styles.clubButton} onClick={() => onStart("spartak")}>
          Спартак
        </div>
        <div className={styles.clubButton} onClick={() => onStart("krasnodar")}>
          Краснодар
        </div>
      </div>
    </div>
  </div>
);

StartScreen.propTypes = {
  onStart: T.func.isRequired,
  onLogoSportsClick: T.func.isRequired,
  onLogoClientClick: T.func.isRequired,
};

export default StartScreen;
