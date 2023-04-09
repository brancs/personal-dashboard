import Style from "./progress.module.css";
import { durationToHrAndMin } from "@/utils/formatDateAndTime";

const commonStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const percentageStyle = {
  ...commonStyle,
  minWidth: "48px",
  maxWidth: "48px",
};

const descStyle = {
  ...commonStyle,
  minWidth: "120px",
  maxWidth: "120px",
};

const progStyle = {
  width: "100%",
  paddingLeft: ".5rem",
  paddingRight: ".5rem",
};

const durStyle = {
  ...commonStyle,
  textAlign: "end",
};

const headers = ["percentage", "description", "progress", "duration"];

const descriptions = [
  "Programar",
  "Documentação",
  "E-mail",
  "Estudar",
  "Produtividade",
  "Festas",
  "Outros",
];
const percents = [23, 46, 66, 23, 52, 72, 11];
const durations = [1121, 312, 732, 411, 643, 11, 32];

const data = descriptions.map((desc, index) => {
  return {
    id: index,
    percentage: {
      info: `${percents[index]}%`,
      style: percentageStyle,
    },
    description: {
      info: desc,
      style: descStyle,
    },
    progress: {
      info: (
        <progress
          value={percents[index]}
          max={100}
          className={Style.progressBar}
        />
      ),
      style: progStyle,
    },
    duration: {
      info: durationToHrAndMin(durations[index]),
      style: durStyle,
    },
  };
});

export { headers, data };
