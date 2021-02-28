import React, { useState } from "react";
import StartScreen from "screens/StartScreen";
import TestScreen from "screens/TestScreen";
import FinishScreen from "screens/FinishScreen";
import { trackEvent } from "utils";
import styles from "./Game.module.css";

const Game = () => {
  const [state, setState] = useState({ step: "start", team: null });
  const onStart = (team) => {
    setState({
      step: "test",
      team,
    });
    trackEvent(team === "spartak" ? "Spartak_Starts" : "Krasnodar_Starts");
  };

  const onRestart = () => {
    setState({
      step: "start",
      team: null,
    });
    trackEvent("Retry_click");
  };

  const onFinish = (result) => {
    setState({
      ...state,
      step: "finish",
      result,
    });
  };

  const onCouponClick = () => {
    trackEvent("Winline_integration_click");
  };

  const onLogoSportsClick = () => {
    trackEvent("Logo_sports_click");
  };

  const onLogoClientClick = () => {
    trackEvent("Logo_winline_click");
  };

  const { step, team, result } = state;

  return (
    <div className={styles.container}>
      {step === "start" && (
        <StartScreen
          onStart={onStart}
          onLogoSportsClick={onLogoSportsClick}
          onLogoClientClick={onLogoClientClick}
        />
      )}
      {step === "test" && (
        <TestScreen
          onRestart={onRestart}
          onFinish={onFinish}
          team={team}
          onLogoSportsClick={onLogoSportsClick}
          onLogoClientClick={onLogoClientClick}
        />
      )}
      {step === "finish" && (
        <FinishScreen
          onRestart={onRestart}
          team={team}
          result={result}
          onCouponClick={onCouponClick}
          onLogoSportsClick={onLogoSportsClick}
          onLogoClientClick={onLogoClientClick}
        />
      )}
    </div>
  );
};

export default Game;
