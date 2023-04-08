import Colors from "./colors";
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
  const durationString = minutesToHourAndMinutes(dateDif / 1000 / 60);

  return {
    id: index,
    block: (
      <div
        style={{ ...commonDetailStyle, backgroundColor: set.borderColor }}
      ></div>
    ),
    time: { info: formatTime, style: timeStyle },
    description: { info: set.label, style: descriptionStyle },
    duration: { info: `${durationString}`, style: durationStyle },
  };
});

function minutesToHourAndMinutes(min) {
  const hours = min / 60;
  const roundHours = Math.floor(hours);
  const minutes = (hours - roundHours) * 60;
  const roundMinutes = Math.round(minutes);
  const hoursText = roundHours > 0 ? `${roundHours}hr` : "";
  const minutesText = roundMinutes > 0 ? `${roundMinutes}min` : "";
  return `${hoursText} ${minutesText}`;
}

export { headers, data };
