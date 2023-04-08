import Colors from "../styles/theme/colors";

const chartSize = 60;
const focusInSeconds = 29400;
const meetingsInSeconds = 19800;
const breaksInSeconds = 4800;
const totalActivityInSeconds =
  focusInSeconds + meetingsInSeconds + breaksInSeconds;
const focusPercentage = Math.trunc(
  (focusInSeconds / totalActivityInSeconds) * 100
);
const meetingsPercentage = Math.trunc(
  (meetingsInSeconds / totalActivityInSeconds) * 100
);
const breaksPercentage = Math.trunc(
  (breaksInSeconds / totalActivityInSeconds) * 100
);

const chartsOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const chartsStyle = {
  borderWidth: 1,
  borderRadius: 100,
  borderColor: "transparent",
  cutout: "80%",
};

const dataFocus = {
  labels: ["Focus Count", "Total"],
  datasets: [
    {
      label: "My Focus",
      data: [focusPercentage, 100 - focusPercentage],
      backgroundColor: [Colors.cyan500, Colors.grey700],
      ...chartsStyle,
    },
  ],
};

const dataMeetings = {
  labels: ["Meetings Count", "Total"],
  datasets: [
    {
      label: "My Meetings",
      data: [meetingsPercentage, 100 - meetingsPercentage],
      backgroundColor: [Colors.pink200, Colors.grey700],
      ...chartsStyle,
    },
  ],
};

const dataBreaks = {
  labels: ["Breaks Count", "Total"],
  datasets: [
    {
      label: "My Breaks",
      data: [breaksPercentage, 100 - breaksPercentage],
      backgroundColor: [Colors.blue600, Colors.grey700],
      ...chartsStyle,
    },
  ],
};

const data = [
  {
    id: 1,
    description: "focus",
    time: "8hr 10min",
    chartData: dataFocus,
    count: focusPercentage,
  },
  {
    id: 2,
    description: "personal",
    time: "5hr 30min",
    chartData: dataMeetings,
    count: meetingsPercentage,
  },
  {
    id: 3,
    description: "breaks",
    time: "1hr 20min",
    chartData: dataBreaks,
    count: breaksPercentage,
  },
];

export {
  chartSize,
  chartsOptions,
  data,
  focusPercentage,
  meetingsPercentage,
  breaksPercentage,
};
