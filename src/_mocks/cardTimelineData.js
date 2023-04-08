import { time2ToHourMinute } from "@/utils/formatDateAndTime";
import Colors from "../styles/theme/colors";

function setTime(h = 0, m = 0) {
  const today = new Date();
  today.setHours(h);
  today.setMinutes(m);
  today.setSeconds(0);

  return today;
}
const todayFirstHalfHour = setTime(5, 30);
const todayLastHalfHour = setTime(22, 30);
const principalLabel = "Eventos";

const data = {
  datasets: [
    {
      label: "Acordar e Higiene",
      data: [
        {
          x: [setTime(6, 0), setTime(6, 30)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.pink200_50,
      borderColor: Colors.pink200,
      borderWidth: 1,
    },
    {
      label: "Café da manhã",
      data: [
        {
          x: [setTime(6, 30), setTime(7, 30)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.pink200_50,
      borderColor: Colors.pink200,
      borderWidth: 1,
    },
    {
      label: "Ler",
      data: [
        {
          x: [setTime(7, 30), setTime(8, 0)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.pink200_50,
      borderColor: Colors.pink200,
      borderWidth: 1,
    },
    {
      label: "Trabalhar",
      data: [
        {
          x: [setTime(8, 0), setTime(9, 50)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.cyan500_50,
      borderColor: Colors.cyan500,
      borderWidth: 1,
    },
    {
      label: "Pausa",
      data: [
        {
          x: [setTime(9, 50), setTime(10, 10)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.blue600_50,
      borderColor: Colors.blue600,
      borderWidth: 1,
    },
    {
      label: "Trabalhar",
      data: [
        {
          x: [setTime(10, 10), setTime(12, 0)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.cyan500_50,
      borderColor: Colors.cyan500,
      borderWidth: 1,
    },
    {
      label: "Almoço",
      data: [
        {
          x: [setTime(12, 0), setTime(13, 0)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.blue600_50,
      borderColor: Colors.blue600,
      borderWidth: 1,
    },
    {
      label: "Trabalhar",
      data: [
        {
          x: [setTime(13, 0), setTime(14, 50)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.cyan500_50,
      borderColor: Colors.cyan500,
      borderWidth: 1,
    },
    {
      label: "Pausa",
      data: [
        {
          x: [setTime(14, 50), setTime(15, 10)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.blue600_50,
      borderColor: Colors.blue600,
      borderWidth: 1,
    },
    {
      label: "Trabalhar",
      data: [
        {
          x: [setTime(15, 10), setTime(17, 0)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.cyan500_50,
      borderColor: Colors.cyan500,
      borderWidth: 1,
    },
    {
      label: "Banho",
      data: [
        {
          x: [setTime(17, 0), setTime(17, 30)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.pink200_50,
      borderColor: Colors.pink200,
      borderWidth: 1,
    },
    {
      label: "Estudar",
      data: [
        {
          x: [setTime(17, 30), setTime(19, 0)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.cyan500_50,
      borderColor: Colors.cyan500,
      borderWidth: 1,
    },
    {
      label: "Jantar",
      data: [
        {
          x: [setTime(19, 0), setTime(20, 0)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.pink200_50,
      borderColor: Colors.pink200,
      borderWidth: 1,
    },
    {
      label: "Jogar",
      data: [
        {
          x: [setTime(20, 0), setTime(21, 45)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.pink200_50,
      borderColor: Colors.pink200,
      borderWidth: 1,
    },
    {
      label: "Deitar",
      data: [
        {
          x: [setTime(21, 45), setTime(22, 0)],
          y: principalLabel,
        },
      ],
      backgroundColor: Colors.pink200_50,
      borderColor: Colors.pink200,
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  barPercentage: 1,
  categoryPercentage: 1,
  indexAxis: "y",
  scales: {
    x: {
      type: "time",
      time: {
        unit: "hour",
        displayFormats: {
          hour: "HH:mm",
        },
      },
      min: todayFirstHalfHour,
      max: todayLastHalfHour,
      grid: { color: "#1c1b23" },
      ticks: {
        callback: (text) =>
          `${new Date(text).toLocaleTimeString("pt-br", {
            hour: "numeric",
          })}hr`,
      },
    },
    y: {
      beginAtZero: true,
      stacked: true,
      grid: { color: "#1c1b23" },
      ticks: { display: false },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    labels: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }

          if (context.raw.x.length > 0) {
            label += `${time2ToHourMinute(
              context.raw.x[0]
            )}	– ${time2ToHourMinute(context.raw.x[1])}`;
          }

          return label;
        },
      },
    },
  },
};

export { data, options };
