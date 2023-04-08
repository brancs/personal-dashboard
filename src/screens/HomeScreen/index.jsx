import Head from "next/head";
import Style from "./index.module.css";
import Title from "@/components/Title";
import CardScores from "./CardScores";
import CardTimeline from "./CardTimeline";

function index() {
  const currentDate = new Date().toLocaleDateString("pt-br", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Head>
        <title>Personal Dashboard</title>
        <meta name="description" content="Personal Dashboard" />
      </Head>
      <main>
        <div className={Style.generalGrid}>
          <Title as={"h2"}>{currentDate}</Title>
          <div className={Style.firstRow}>
            <CardTimeline />
            <CardScores />
          </div>
        </div>
      </main>
    </>
  );
}

export default index;
