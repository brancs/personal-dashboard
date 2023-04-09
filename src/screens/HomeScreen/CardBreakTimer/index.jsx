import Style from "./index.module.css";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useState } from "react";
import useTimer from "@/hooks/useTimer";

function CardBreakTimer() {
  const [timeElapsed, startTimer, stopTimer] = useTimer();
  const [isCountingTime, setIsCountingTime] = useState(false);

  function handleClick() {
    if (!isCountingTime) {
      startTimer();
      setIsCountingTime(true);
      return;
    }

    stopTimer();
    setIsCountingTime(false);
  }

  return (
    <Card title={"Break Timer"} style={{ height: "max-content" }}>
      <div className={Style.mainGrid}>
        <div className={Style.mainCol}>
          <div>
            <span className={Style.smallText}>Break elapsed time</span>
            <span className={Style.mainText}>{timeElapsed}</span>
          </div>
          <div>
            <span className={Style.smallText}>Break to work ratio</span>
            <span className={Style.subText}>1 / 3.6</span>
          </div>
        </div>
        <div className={Style.mainCol}>
          <div>
            <div className={Style.subCol}>
              <span className={Style.smallText}>Notifications:</span>
              <span className={Style.smallText}>On</span>
            </div>
            <div className={Style.subCol}>
              <span className={Style.smallText}>Notifications treshold:</span>
              <span className={Style.smallText}>40min</span>
            </div>
          </div>
          <div>
            <Button onClick={handleClick}>
              {isCountingTime ? "Stop" : "Start"} Break
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardBreakTimer;
