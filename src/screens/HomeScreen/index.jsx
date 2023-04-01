import Head from "next/head";
import { CardsGrid, Card } from "@/components/Cards";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables);

function index() {
  return (
    <>
      <Head>
        <title>Personal Dashboard</title>
        <meta name="description" content="Personal Dashboard" />
      </Head>
      <main>
        <h1>Personal Dashboard</h1>
        <CardsGrid>
          <Card title={"Gráfico de barras"}>
            <Bar
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </Card>
        </CardsGrid>
      </main>
    </>
  );
}

export default index;
