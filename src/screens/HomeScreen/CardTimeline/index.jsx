import Style from "./index.module.css";
import Card from "@/components/Card";
import { Chart as ChartJS, registerables } from "chart.js";
import "chartjs-adapter-luxon";
import { Bar } from "react-chartjs-2";
import { data, options } from "@/_mocks/cardTimelineData";

ChartJS.register(...registerables);

function CardTimeline() {
  return (
    <Card title={"Timeline"}>
      <div
        style={{
          position: "relative",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "60px",
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
}

export default CardTimeline;
