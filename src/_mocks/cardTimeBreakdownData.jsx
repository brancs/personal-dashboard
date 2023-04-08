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

const data = descriptions.map((desc, index) => {
  const randPercent = Math.floor(Math.random() * 101);
  const randDuration = Math.floor(Math.random() * 1441);

  return {
    id: index,
    percentage: {
      info: `${randPercent}%`,
      style: percentageStyle,
    },
    description: {
      info: desc,
      style: descStyle,
    },
    progress: {
      info: (
        <progress value={randPercent} max={100} className={Style.progressBar} />
      ),
      style: progStyle,
    },
    duration: {
      info: durationToHrAndMin(randDuration),
      style: durStyle,
    },
  };
});

export { headers, data };
