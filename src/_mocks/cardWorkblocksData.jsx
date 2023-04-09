import { durationToHrAndMin } from "@/utils/formatDateAndTime";
import { data as TimelineData } from "./cardTimelineData";

const commonStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const commonDetailStyle = {
  width: "4px",
  height: "19px",
  marginRight: "4px",
};

const durationStyle = {
  ...commonStyle,
  textAlign: "end",
};

const descriptionStyle = {
  ...commonStyle,
  width: "auto",
};

const timeStyle = {
  ...commonStyle,
  width: "49px",
};

const headers = ["block", "time", "description", "duration"];

const data = TimelineData.datasets.map((set, index) => {
  const formatTime = set.data[0].x[0].toLocaleTimeString("pt-br", {
    hour: "numeric",
    minute: "numeric",
  });
  const dateDif = set.data[0].x[1] - set.data[0].x[0];
  const durationString = durationToHrAndMin(dateDif / 1000 / 60);

  return {
    id: index,
    block: (
      <div
        style={{ ...commonDetailStyle, backgroundColor: set.backgroundColor }}
      ></div>
    ),
    time: { info: formatTime, style: timeStyle },
    description: { info: set.label, style: descriptionStyle },
    duration: { info: `${durationString}`, style: durationStyle },
  };
});

export { headers, data };
