import React from "react";
import T from "prop-types";
import cx from "classnames";
import Bg from "base/Bg";
import Icon from "base/Icon";
import LogoSports from "base/LogoSports";
import LogoClient from "base/LogoClient";
import ShareButton from "base/ShareButton";
import styles from "./FinishScreen.module.css";

const descriptions = [
  [
    "Болеть – обязательно, матчасть – подучить!",
    "Ставьте на «Краснодар» с Winline",
    {
      spartak: "Оказалось, я не очень-то разбираюсь в игроках «Спартака»",
      krasnodar: "Оказалось, я не очень-то разбираюсь в игроках «Краснодара»",
    },
  ],
  [
    "Различаете Берга и Классона с закрытыми глазами!",
    "Ставьте на «Краснодар» с Winline",
    {
      spartak: "Я разбираюсь в игроках «Спартака»!",
      krasnodar: "Я разбираюсь в игроках «Краснодара»!",
    },
  ],
  [
    "Настоящий знаток «Краснодара»",
    "Ставьте на любимую команду c Winline",
    {
      spartak: "Я идеально разбираюсь в игроках «Спартака»!",
      krasnodar: "Я идеально разбираюсь в игроках «Краснодара»!",
    },
  ],
];

const getResultIndex = (n) => {
  if (n < 6) return 0;
  if (n < 8) return 1;
  return 2;
};

const FinishScreen = ({
  team,
  result,
  onRestart,
  onCouponClick,
  onLogoSportsClick,
  onLogoClientClick,
}) => {
  const resultIndex = getResultIndex(result);
  const [d1, d2, d3] = descriptions[resultIndex];
  const shareLink = `/winlinederbyfive/share/${team}/${resultIndex + 1}`;

  return (
    <div className={styles.container}>
      <Bg />
      <a
        className={cx(styles.crest, {
          [styles.crestSpartak]: team === "spartak",
          [styles.crestKrasnodar]: team === "krasnodar",
        })}
        href="/"
        target="_blank"
      />
      <div className={styles.blacker} />
      <LogoSports onClick={onLogoSportsClick} />
      <LogoClient onClick={onLogoClientClick} />

      <div className={styles.content}>
        <div className={styles.title}>Мой результат: {result}/8</div>
        <div className={styles.description}>{d1}</div>
        <div className={styles.description}>{d2}</div>
        <a
          className={styles.couponButton}
          href="/"
          target="_blank"
          onClick={onCouponClick}
        >
          Забрать 1000 рублей
        </a>
        <div className={styles.contentBottom}>
          <div className={styles.restart} onClick={onRestart}>
            <Icon type="restart" fill="#F68004" />
          </div>
          <div className={styles.contentBottomShare}>
            <ShareButton
              className={styles.shareButton}
              provider="fb"
              link={`${shareLink}&quote=${d3[team]}`}
            />
            <ShareButton
              className={styles.shareButton}
              provider="vk"
              link={`${shareLink}&title=${d3[team]}`}
            />
            <ShareButton
              className={styles.shareButton}
              provider="tw"
              link={`${shareLink}&text=${d3[team]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FinishScreen.propTypes = {
  team: T.oneOf(["spartak", "krasnodar"]).isRequired,
  result: T.number.isRequired,
  onRestart: T.func.isRequired,
  onCouponClick: T.func.isRequired,
  onLogoSportsClick: T.func.isRequired,
  onLogoClientClick: T.func.isRequired,
};

export default FinishScreen;
