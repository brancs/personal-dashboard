const commonStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const processStyle = {
  ...commonStyle,
  maxWidth: "200px",
  color: "#3F3E46",
  fontWeight: 600,
};

const applicationStyle = {
  ...commonStyle,
  width: "65px",
};

const timeStyle = {
  ...commonStyle,
  width: "68px",
};

const headers = ["time", "application", "proccess"];

const data = [
  {
    id: 3,
    time: { info: "15:25:47", style: timeStyle },
    application: { info: "Chrome", style: applicationStyle },
    proccess: {
      info: "Open https://youtube.com",
      style: processStyle,
    },
  },
  {
    id: 2,
    time: { info: "15:16:23", style: timeStyle },
    application: { info: "Chrome", style: applicationStyle },
    proccess: { info: "Open https://twitter.com", style: processStyle },
  },
  {
    id: 1,
    time: { info: "15:15:49", style: timeStyle },
    application: { info: "Chrome", style: applicationStyle },
    proccess: { info: "Initiated", style: processStyle },
  },
];

export { headers, data };
