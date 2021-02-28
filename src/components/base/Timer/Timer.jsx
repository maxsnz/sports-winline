import React from "react";
import T from "prop-types";
import cx from "classnames";
import styles from "./Timer.module.css";

const f00 = (n) => (n > 9 ? `${n}` : `0${n}`);
const getSeconds = (miliseconds) => Math.round(miliseconds / 1000);
const formatTime = (seconds) => [(seconds - (seconds % 60)) / 60, seconds % 60];

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    const { timerLength, onEnd } = this.props;

    this.setState({
      timeRemaining: timerLength,
    });

    this.interval = setInterval(() => {
      const { timeRemaining } = this.state;
      const newtTimeRemaining = timeRemaining - 1000;
      if (newtTimeRemaining <= 0) {
        this.setState({
          timeRemaining: 0,
        });
        clearInterval(this.interval);
        onEnd();
      } else {
        this.setState({
          timeRemaining: newtTimeRemaining,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { className } = this.props;
    const { timeRemaining } = this.state;

    const [minutes, seconds] = formatTime(getSeconds(timeRemaining));

    return (
      <div className={cx(styles.container, className)}>
        {f00(minutes)}
        <span className={styles.razd}>:</span>
        {f00(seconds)}
      </div>
    );
  }
}

Timer.propTypes = {
  timerLength: T.number.isRequired,
  onEnd: T.func.isRequired,
  className: T.string,
};

export default Timer;
