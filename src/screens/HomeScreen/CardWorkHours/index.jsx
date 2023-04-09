import Style from "./index.module.css";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useState } from "react";

function CardWorkHours() {
  const [isTracking, setIsTracking] = useState(true);

  function handleClick() {
    setIsTracking((isTracking) => !isTracking);
  }

  return (
    <Card title={"Work Hours"} style={{ height: "max-content" }}>
      <div className={Style.mainGrid}>
        <div className={Style.mainCol}>
          <div>
            <span className={Style.smallText}>Total time worked</span>
            <span className={Style.mainText}>7hr 35min</span>
          </div>
          <div>
            <span className={Style.smallText}>Percent of work day</span>
            <span className={Style.subText}>
              98.01% <span className={Style.smallText}>of 8hr</span>
            </span>
          </div>
        </div>
        <div className={Style.mainCol}>
          <div>
            <div className={Style.subCol}>
              <span className={Style.smallText}>Tracking:</span>
              <span className={Style.smallText}>
                {isTracking ? "On" : "Off"}
              </span>
            </div>
            <div className={Style.subCol}>
              <span className={Style.smallText}>Tracking hours:</span>
              <span className={Style.smallText}>8:00–17:00</span>
            </div>
          </div>
          <div>
            <Button onClick={handleClick}>
              {isTracking ? "Disable" : "Enable"} Tracking
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardWorkHours;
