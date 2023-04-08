import Style from "./index.module.css";
import Card from "@/components/Card";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data, chartSize, chartsOptions } from "@/_mocks/cardScoresData";

ChartJS.register(...registerables);

function CardScores() {
  return (
    <Card
      title={"Scores"}
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <div className={Style.roundedChartsGrid}>
        {data.map(({ id, description, time, chartData, count }) => (
          <div className={Style.chartWrapper} key={id}>
            <div
              className={Style.chartContainer}
              style={{ width: `${chartSize}px`, height: `${chartSize}px` }}
            >
              <div>
                <Doughnut
                  data={chartData}
                  options={chartsOptions}
                  width={chartSize}
                  height={chartSize}
                />
              </div>
              <span className={Style.chartMiddleText}>~{count}%</span>
            </div>
            <div className={Style.chartDetails}>
              <span className={Style.description}>{description}</span>
              <span className={Style.time}>{time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CardScores;
