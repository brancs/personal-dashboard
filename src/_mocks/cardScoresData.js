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
      backgroundColor: ["#7DE3F1", "#1c1b23"],
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
      backgroundColor: ["#E6BAEB", "#1c1b23"],
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
      backgroundColor: ["#345179", "#1c1b23"],
      ...chartsStyle,
    },
  ],
};

const data = [
  {
    id: 1,
    description: "focus",
    time: "8h 10m",
    chartData: dataFocus,
    count: focusPercentage,
  },
  {
    id: 2,
    description: "personal",
    time: "5h 30m",
    chartData: dataMeetings,
    count: meetingsPercentage,
  },
  {
    id: 3,
    description: "breaks",
    time: "1h 20m",
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
